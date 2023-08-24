Tabii ki, işte README.md dosyasının tamamı Markdown formatında:

```markdown
# MongoDB Remote CSV Data Import Script

This script allows you to import data from a CSV file to a remote MongoDB server. It utilizes the `csv-parser` package to read the CSV file and the `mongodb` package to interact with the MongoDB database.

## Prerequisites

Before using this script, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 14)
- [npm](https://www.npmjs.com/) (included with Node.js)

## Installation

1. Clone this repository or download the script to your project directory.

2. Open your terminal and navigate to the project directory.

3. Run the following command to install the required dependencies:

   ```sh
   npm install
   ```

## Configuration

1. Open the `script.js` file.

2. Update the following variables with your specific values:

   - `mongoUri`: Replace this with your MongoDB Atlas connection URI.
   - `csvFilePath`: Specify the path and name of your CSV file.

3. Save the changes.

## Usage

1. Open your terminal and navigate to the project directory.

2. Run the following command to start the script:

   ```sh
   npm start
   ```

3. The script will read the CSV file, check for empty lines, and then upload the data to the specified MongoDB collection on the remote server.

## Note

- The script uses the `csv-parser` package to read the CSV file. Make sure your CSV file has a header row to map the fields correctly.
- Ensure that your MongoDB server is accessible and the provided URI is correct.
- You may need to adjust MongoDB access permissions to allow the script to write data.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize and improve this script according to your specific needs. If you encounter any issues or have questions, please open an issue on this repository.

```
