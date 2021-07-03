var app = new function() {
  this.el = document.getElementById('recordsList');

  this.recordsList = [];

    this.FetchAll = function() {
      var data = '';

      if(this.recordsList.length > 0){
        for(i = 0; i < this.recordsList.length; i++) {
          data += '<tr>';
          data += '<td class="recordItem">' + (i + 1) + ". " + this.recordsList[i] + '</td>';
          data += '<td><button onclick="app.Edit(' + i + ')" class="editButton">Edit</button><button onclick="app.Delete(' + i + ')" class="deleteButton">Delete</button></td>';
          data += '</tr>';
        }
      }

      this.Count(this.recordsList.length);
      return this.el.innerHTML = data;
    };

  this.Add = function() {
    record = document.getElementById('recordName')
    singer = document.getElementById('artist')

    var aRecord = record.value + ", " + singer.value;

    if (aRecord) {
      this.recordsList.push(aRecord.trim());
      record.value = '';
      singer.value = '';
      this.FetchAll();
    }
  };

  this.Edit = function (item) {
    var el = document.getElementById('edit-record');
    el.value = this.recordsList[item];
    document.getElementById('edit-box').style.display = 'block';
    self = this;

    document.getElementById('save-edit').onsubmit = function() {
      var change = el.value;
      if(change) {
        self.recordsList.splice(item, 1, change.trim());
        self.FetchAll();
        CloseInput();
      }
    }
  };

  this.Delete = function(item) {
    this.recordsList.splice(item, 1);
    this.FetchAll();
  };

  this.Count = function(data) {
    var el = document.getElementById('counter');
    var name = 'Records';
    if (data) {
      if(data == 1) {
        name = 'Record'
      }
      el.innerHTML = data + ' ' +name;
    } else {
      el.innerHTML = "No " +name;
    }
  };

}
app.FetchAll();






































function CloseInput() {
  document.getElementById('edit-box').style.display = 'none';
}
