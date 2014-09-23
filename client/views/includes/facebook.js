Template.facebook.helpers({
  queryString:function(){
    var parameters={
      href:encodeURIComponent(location.href),
       send:"false",
       colorscheme:"light"
    };
    var pairs=_.pairs(parameters);
    var pairsJoined=_.map(pairs,function(pair){
      return pair.join("=");
    });
    return pairsJoined.join("&");
  }
});






