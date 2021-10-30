const ffmpeg = require("fluent-ffmpeg");
//썸네일 사용시 ffmpeg를 다운받아야한다.
// 우분투 - 터미널에서 sudo apt update -> sudo apt install ffmpeg  // 다운로드 확인 ffmpeg -version
// Mac - vs code 커맨드라인에서 깃으로 brew install ffmpeg 명령어로 다운

module.exports = {
	post: (req, res) => {
		let filePath = "";
		//비디오 정보 가져오기
		console.log(`!!!!!!!`, req.body)
		ffmpeg.ffprobe(req.body.url, function (err, metadata) {
			//url을 받으면 해당 비디오에대한 정보가 metadata에담김
			console.log(`#####`, metadata); //metadata안에담기는 모든정보들 체킹
		});
		//썸네일 생성
		ffmpeg(req.body.url) //클라이언트에서보낸 비디오저장경로
			.on("filenames", function (filenames) {
				//해당 url에있는 동영상을 밑에 스크린샷옵션을 기반으로
				//캡처한후 filenames라는 이름에 파일이름들을 저장
				console.log("will generate " + filenames.join(","));
				console.log("filenames:", filenames);

				filePath = "uploads/thumbnails/" + filenames[0];
			})
			.on("end", function () {
				console.log("Screenshots taken");
				return res.json({
					success: true,
					url: filePath,
				})
			})
			.on("error", function (err) {
				console.log(err);
				return res.json({ success: false, err });
			})
			.screenshots({
				//Will take screenshots at 20% 40% 60% and 80% of the video
				count: 1,
				folder: "uploads/thumbnails",
				size: "320x240",
				//'%b':input basename(filename w/o extension) = 확장자제외파일명
				filename: "thumbnail-%b.png",
			});
	}
}