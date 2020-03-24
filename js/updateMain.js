function export2() {
	alert("hello");
		var excel = new ExcelGen({
			"src_id": "id_main_output_table",
			"show_header": true
		});
		
		excel.generate();
}
function export1() {
	$('#id_main_output_table').tableExport({type:'csv',escape:'false'});
}