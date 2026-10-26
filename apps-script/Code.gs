function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  if (e.parameter.name !== undefined && e.parameter.score !== undefined) {
    var name = e.parameter.name;
    var score = e.parameter.score;
    var formattedDate = Utilities.formatDate(new Date(), "Asia/Bangkok", "dd/MM/yyyy HH:mm:ss");
    
    sheet.appendRow([formattedDate, name, score]);
    
    return ContentService.createTextOutput("Success");
  } 
  
  else {
    var data = sheet.getDataRange().getValues();
    var jsonData = [];
    
    for (var i = 1; i < data.length; i++) {
      var row = data[i];
 
      if(row[2] !== "") {
        jsonData.push({
          "date": row[0].toString(),
          "name": row[1].toString(),
          "score": Number(row[2]) 
        });
      }
    }
    
    var jsonOutput = JSON.stringify(jsonData);
    
    return ContentService.createTextOutput(jsonOutput)
      .setMimeType(ContentService.MimeType.JSON);
  }
}