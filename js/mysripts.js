var imgArray = new Array(
"images/culture1.jpg",
"images/culture2.jpg",
"images/culture3.jpg",
"images/culture4.jpg",
"images/diwali1.jpg",
"images/diwali2.jpg",
"images/diwali3.jpg",
"images/diwali4.jpg",
);

var textArray = new Array(
  "Odissi Dance",
  "Kathakali Dance",
  "Lighting Lamp",
  "Marriage Ceremony",
)

var lifestyleImages   = 4;
var festivalImages    = 8;
var curImagelifestyle = 1;
var curImageFestival  = 5;
var textChange;



function change( action )
{
  if(document.getElementById("c1"))
  {
    curImagelifestyle = curImagelifestyle + action;

    if (curImagelifestyle > lifestyleImages)
    {
      curImagelifestyle = 1 ;
    }
    if (curImagelifestyle == 0)
    {
      curImagelifestyle = lifestyleImages ;
    }

    document.getElementById("c1").src = imgArray[curImagelifestyle - 1];
    document.getElementById("lifeText").innerHTML = textArray[curImagelifestyle - 1];

  }
  else if(document.getElementById("d1"))
  {
    curImageFestival = curImageFestival + action;

    if (curImageFestival > festivalImages)
    {
      curImageFestival = 5 ;
    }
    if (curImageFestival == 4)
    {
      curImageFestival = festivalImages ;
    }

    document.getElementById("d1").src = imgArray[curImageFestival - 1];

  }

}
function nameCheck(inputtext) {
var fname = document.getElementById("name").value;
var fb    = document.getElementById("feedback").value;


  if(fname !="" && fname !="")
  {
    alert("Submitted");
  }
  else
   {
      if(fname =="")
      {
        alert("Please enter the Name");
      }
      if(fname =="")
      {
        alert("Please enter the feedback");
      }
    }


}
