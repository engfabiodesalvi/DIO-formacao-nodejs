
export default function getNameFile(metadataNumber) {
    const date = new Date().toISOString().split("T")[0];
    const time = new Date().toISOString().split("T")[1].split("Z")[0].replaceAll(".","-").replaceAll(":","-");
    const nameFile = `invoice_${metadataNumber.number}_${date}_${time}.pdf`;

    return nameFile;
}
  