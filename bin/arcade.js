const fs = require("fs");
const fetch = require("node-fetch");

const ARCADE_KEY = process.env.ARCADE_KEY;
if (ARCADE_KEY) {
	(async () => {
		try {
			const res = await fetch(
				"https://api.usearcade.com/api/projects/621efb7aa838720018034d08/tokens/live/export/css/raw",
				{
					headers: {
						authorization: `Bearer ${ARCADE_KEY}`,
					},
				},
			).then(async (r) => {
				if (!r.ok) {
					throw await r.json();
				}
				return await r.json();
			});

			const TARGET_PATH = "./assets/css/";
			const formats = Object.keys(res.exports).map(
				(format) => res.exports[format],
			);

			for (const format of formats) {
				const fileString = format.output;
				const outputPath = `${TARGET_PATH}${format.fileName}.${format.fileExtension}`;
				await fs.writeFile(outputPath, fileString, (err) => {
					if (err) console.log(err);
					else {
						console.log(
							"\x1b[32m",
							`Successfully built Arcade ${format.displayName} at ${outputPath}!`,
						);
					}
				});
			}
		} catch (err) {
			console.log("Error: ", err);
		}
	})();
}
