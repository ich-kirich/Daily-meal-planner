import fs from "fs";
import parser from "xml2json";
import path from "path";

function readXmlData() {
  const filePath = path.join(__dirname, "../../", "data/FoodProducts.xml");
  const xmlFile = fs.readFileSync(filePath, "utf8");
  return parser.toJson(xmlFile, { object: true });
}

export default readXmlData;
