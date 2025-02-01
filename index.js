import fs from "fs"
import inquirer from "inquirer"
import qr from "qr-image"

inquirer
	.prompt([
		{
			message: "Type a URL to get a QR-code: ",
			name: "URL",
		},
	])
	.then((answers) => {
		var userUrl = answers.URL

		var qr_png = qr.image(userUrl)
		qr_png.pipe(fs.createWriteStream("qrcode.png"))

		fs.writeFile("text.txt", userUrl, (err) => {
			if (err) throw err
			else console.log("QR code has been created & the link has been saved!")
		})
	})
	.catch((error) => {
		if (error.isTtyError) {
			console.log("QR code generation failed")
		} else {
			//
		}
	})
