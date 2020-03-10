//Copyright Christian Outreach Church and School


// write my own script
// alert('test');
function autoFun (){

    for(let i = 0; i < sermons.length; i++){
        console.log(sermons[i].date);
        console.log(sermons[i].title);
        console.log(sermons[i].preacher);
        loadSermon(i);
        listSermon(i);
    }
}
autoFun();

// This loads the most recent sermons?
// Copied previous function - neeeds to be scrapped and rewritten.
function loadSermon(i) {
    const id = sermons[i].id;
    const title = sermons[i].title;
    const preacher = sermons[i].preacher;
    const date = sermons[i].date;
    const doctype = sermons[i].doctype;
    const audioSrc = "./sermons/downloads/" + id + ".mp3";
    // const downloadHref = "./sermons/downloads/" + id + ".mp3";
    const downloadName = title + " -- " + preacher + ".mp3";
    const downloadNameSermonNotes = id.slice(0, 10);
    const downloadNameSermonNotesExt = doctype;
         
    const sermonInfo = "&ldquo;" + title + "&rdquo; by <a link class='blueLink' href='./about/leadership/'> " + preacher + "</a> | <a link class='blueLink' href='./sermons/downloads/notes/" + downloadNameSermonNotes + "sermon_notes." + downloadNameSermonNotesExt + "'>Sermon Notes</a> | <a link class='blueLink' href='./sermons/downloads/bulletins/Bulletin" + id.slice(0, 10) + ".pdf' target='_blank'>Bulletin</a>";
    document.getElementById("date").innerHTML = date;
    document.getElementById("audio").setAttribute("src", audioSrc);
    document.getElementById("download").setAttribute("href", downloadHref);
    document.getElementById("download").setAttribute("download", downloadName);
    document.getElementById("sermonInfo").innerHTML = sermonInfo;
    // document.getElementById("audio_latest").setAttribute("src", "./sermons/downloads/latest.mp3");
    // document.getElementById("download_latest").setAttribute("href", "./sermons/downloads/latest.mp3");
    // document.getElementById("download_latest").setAttribute("download", "latest.mp3");
    document.getElementById("sermon_title").innerHTML = title;
    // window.scrollTo(0, 0);
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

