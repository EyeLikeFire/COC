//Copyright Christian Outreach Church and School

"use strict";


function init() {
  
  //Fill in the following variables:
  
  //Message to put on the top of the page
	var topMessage = "Welcome to Christian Outreach Church!";
  //Page for the topMessage to link to
	var topMessageLink = "";
  //Turn the mid-page announcement on or off (true/false)
	var announcementOn = false;
  //Words for the mid-page announcement
	var announcement = "School now enrolling for the 2019-2020 school year.";
  //Link for the mid-page announcement
	var announcementLink = "./school/enrollment";
	
  //Leave the rest alone.
  
  
  
	var e = document.getElementById('message');
	e.innerHTML = topMessage;
	e.href = topMessageLink;
	if (announcementOn === true) {
		document.getElementById('announcement').style.display = 'block';
		var a = document.getElementById('announcementTxt');
		a.innerHTML = announcement;
		a.href = announcementLink;
	}
}

function openSh(menu) {
  var header = document.getElementById("header");
  var Sh = document.getElementById("Sh");
  var img = document.getElementById(menu + "Img");
  if (header.getAttribute("shState") === "off") {
    header.setAttribute("shState", "on");
    Sh.setAttribute("shState", "on");
    document.getElementById("Sh").innerHTML = document.getElementById(menu).innerHTML;
    img.style.transform = "rotate(180deg)";
  } else if (header.getAttribute("shState") === "on") {
    header.setAttribute("shState", "off");
    Sh.setAttribute("shState", "off");
    document.getElementById("Sh").innerHTML = "";
    img.style.transform = "rotate(0deg)";
  }
}
function menuOpen() {
  var header = document.getElementById("header");
  if (header.getAttribute("ocState") === "closed") {
    header.setAttribute("ocState", "open");
  } else if (header.getAttribute("ocState") === "open") {
    header.setAttribute("ocState", "closed");
    if (document.getElementById("Sh").getAttribute("shState") === "on") {
      openSh();
    }
  }
}
function loadSermon(num) {
  var id = sermons[num].id;
  var title = sermons[num].title;
  var preacher = sermons[num].preacher;
  var date = sermons[num].date;
  var doctype = sermons[num].doctype;
  var audioSrc = "./sermons/downloads/" + id + ".mp3";
  var downloadHref = "./sermons/downloads/" + id + ".mp3";
  var downloadName = title + " -- " + preacher + ".mp3";
  var downloadNameSermonNotes = id.slice(0, 10);
  var downloadNameSermonNotesExt = doctype;
 	  
  var sermonInfo = "&ldquo;" + title + "&rdquo; by <a link class='blueLink' href='./about/leadership/'> " + preacher + "</a> | <a link class='blueLink' href='./sermons/downloads/notes/" + downloadNameSermonNotes + "sermon_notes." + downloadNameSermonNotesExt + "'>Sermon Notes</a> | <a link class='blueLink' href='./sermons/downloads/bulletins/Bulletin" + id.slice(0, 10) + ".pdf' target='_blank'>Bulletin</a>";
  document.getElementById("date").innerHTML = date;
  document.getElementById("audio").setAttribute("src", audioSrc);
  document.getElementById("download").setAttribute("href", downloadHref);
  document.getElementById("download").setAttribute("download", downloadName);
  document.getElementById("sermonInfo").innerHTML = sermonInfo;
  document.getElementById("audio_latest").setAttribute("src", "./sermons/downloads/latest.mp3");
  document.getElementById("download_latest").setAttribute("href", "./sermons/downloads/latest.mp3");
  document.getElementById("download_latest").setAttribute("download", "latest.mp3");
  document.getElementById("sermon_title").innerHTML = title;
  window.scrollTo(0, 0);
}
function initSermons(max) {
  var x = max;
  loadSermon(max)
  while (x > (max - 5)) {
    if (sermons[x] != undefined) {
      listSermon(x);
    }
    x = x - 1;
  }
}
function listSermon(num) {
  var a = document.createElement("a");
  a.setAttribute("class", "blueLink");
  a.setAttribute("onclick", "loadSermon(" + num + ");");
  var p = document.createElement("p");
  p.innerHTML = "&ldquo;" + sermons[num].title + "&rdquo; by " + sermons[num].preacher + ", " + sermons[num].date;
  a.appendChild(p);
  document.getElementById("sermonsList").appendChild(a);
}
function showAllSermons() {
  var start = max - 5;
  var x = start;
  while (x > (min - 1)) {
    if (sermons[x] != undefined) {
      listSermon(x);
    }
    x = x - 1;
  }
  document.getElementById("more").style.display = "none";
}

function showSpecialSermons() {
  var listofSermons = [1000]
  listofSermons.forEach(listSermon)
  document.getElementById("more").style.display = "none";
}
function openWindow(winn) {
  var el = document.getElementById(winn);
  var Ct = document.getElementById(winn + "Ct");
  var ocV = el.getAttribute("oc");
  if (ocV === "closed") {
    el.setAttribute("oc", "open");
    Ct.style.display = "block";
  }
  if (ocV === "open") {
    el.setAttribute("oc", "closed");
    Ct.style.display = "none";
  }
}
function stickyV() {
  var header = document.getElementById("header");
  var hc = document.getElementById("headerContainer");
  var height = hc.getBoundingClientRect().bottom + "px";
  if (window.innerWidth > 839) {
    var wh = window.innerHeight * 0.15;
    if (window.pageYOffset < wh) {
      header.style.top = height;
    } else {
      header.style.top = "0px";
    }
  }
}
window.onscroll = function () {stickyV(); };
init();
