const fs = require("fs");
const fetch = require("node-fetch");

const ARCADE_KEY = process.env.ARCADE_KEY;
// const ARCADE_KEY =
// 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyMGU4ZTZmMmM2YzkzMDAxOGQ3N2ZkNSIsImVtYWlsIjoiaGV5QGF1cm9vYmEuY29tIn0sInByb2plY3RJZCI6IjYyMWVmYjdhYTgzODcyMDAxODAzNGQwOCIsImtleSI6IldBWURzbjRaSEkiLCJpYXQiOjE2NDYxOTg0NzYsImV4cCI6MTcxNTMxODQ3Nn0.P4XyrucRr588b1EzA1ctNKqKk2H845v7-DtLchds4t0";
(async () => {
	try {
		const res = await fetch(
			"https://api.usearcade.com/api/projects/621efb7aa838720018034d08/tokens/live/export/css/raw",
			{
				headers: {
					authorization: "Bearer " + ARCADE_KEY,
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
