Template.comment.helpers({
submittedText: function() {
var options = {weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric"};
return new Date(this.submitted).toLocaleString("fr-FR" , options);
}
});
