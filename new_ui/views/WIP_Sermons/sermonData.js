const sermons = [
    {
        id: "2017_01_01DR",
        title: "-",
        preacher: "Daryl Roth",
        date: "January 01, 2017"
    },
    {
        id: "2017_01_08AW",
        title: "-",
        preacher: "",
        date: "January 08, 2017"
    },
    {
        id: "2017_01_22WD",
        title: "-",
        preacher: "Wayne DeCloux",
        date: "January 22, 2017"
    },
    {
        id: "2017_02_05WH",
        title: "-",
        preacher: "Warren Henriksen",
        date: "February 05, 2017"
    },
    {
        id: "2017_02_12SM",
        title: "-",
        preacher: "Steve Miller",
        date: "February 12, 2017"
    },
    {
        id: "2017_02_19DR",
        title: "-",
        preacher: "Daryl Roth",
        date: "February 19, 2017"
    },
    {
        id: "2017_02_26DH",
        title: "-",
        preacher: "Dave Houser",
        date: "February 26, 2017"
    },
    {
        id: "2017_03_05SB",
        title: "-",
        preacher: "",
        date: "March 05, 2017"
    },
    {
        id: "2017_03_12WD",
        title: "-",
        preacher: "Wayne DeCloux",
        date: "March 12, 2017"
    },
    {
        id: "2017_03_19TK",
        title: "Marriage Done God's Way",
        preacher: "Tom Kraeuter",
        date: "March 19, 2017"
    },
    {
        id: "2017_03_26SM",
        title: "Marriages That Influence Future Generations",
        preacher: "Steve Miller",
        date: "March 26, 2017"
    },
    {
        id: "2017_04_02DR",
        title: "Oh How I Love Your Law",
        preacher: "Daryl Roth",
        date: "April 02, 2017"
    },
    {
        id: "2017_04_09WD",
        title: "Behold He Comes",
        preacher: "Wayne DeCloux",
        date: "April 09, 2017"
    },
    {
        id: "2017_04_16TK",
        title: "The Resurrection: So What? (Easter)",
        preacher: "Tom Kraeuter",
        date: "April 16, 2017"
    },
    {
        id: "2017_04_23WH",
        title: "Philippines Ministry Recap",
        preacher: "Warren Henriksen",
        date: "April 23, 2017"
    },
    {
        id: "2017_04_30SM",
        title: "Be Careful, Eyes and Mind",
        preacher: "Steve Miller",
        date: "April 30, 2017"
    },
    {
        id: "2017_05_07DR",
        title: "Marriage Is God's Doing",
        preacher: "Daryl Roth",
        date: "May 07, 2017"
    },
    {
        id: "2017_05_14TK",
        title: "The Responsibility of Marriage",
        preacher: "Tom Kraeuter",
        date: "May 14, 2017"
    },
    {
        id: "2017_05_21WH",
        title: "The Purpose for Prospering",
        preacher: "Warren Henriksen",
        date: "May 21, 2017"
    },
    {
        id: "2017_05_28SM",
        title: "A Prosperous Life",
        preacher: "Steve Miller",
        date: "May 28, 2017"
    },
    {
        id: "2017_06_04WD",
        title: "Prosperity by Proclamation",
        preacher: "Wayne DeCloux",
        date: "June 04, 2017"
    },
    {
        id: "2017_06_11DR",
        title: "Oh the Riches of His Wisdom -- Pt 1",
        preacher: "Daryl Roth",
        date: "June 11, 2017"
    },
    {
        id: "2017_06_18TK",
        title: "Biblical Prosperity",
        preacher: "Tom Kraeuter",
        date: "June 18, 2017"
    },
    {
        id: "2017_06_25WD",
        title: "The Lens of Stewardship",
        preacher: "Wayne DeCloux",
        date: "June 25, 2017"
    },
    {
        id: "2017_07_02SM",
        title: "Our Father Provides",
        preacher: "Steve Miller",
        date: "July 02, 2017"
    },
    {
        id: "2017_07_09TK",
        title: "My Father, My Provider",
        preacher: "Tom Kraeuter",
        date: "July 09, 2017"
    },
    {
        id: "2017_07_16DR",
        title: "Oh the Riches of His Wisdom -- Pt 2",
        preacher: "Daryl Roth",
        date: "July 16, 2017"
    },
    {
        id: "2017_07_23LP",
        title: "guest speaker -- LeRoy Petersen",
        preacher: "",
        date: "July 23, 2017"
    },
    {
        id: "2017_07_30WH",
        title: "Stewardship",
        preacher: "Warren Henriksen",
        date: "July 30, 2017"
    },
    {
        id: "2017_08_06WD",
        title: "The Lens of Out-giving God",
        preacher: "Wayne DeCloux",
        date: "August 06, 2017"
    },
    {
        id: "2017_08_13SM",
        title: "Build on the Faith You've Been Given",
        preacher: "Steve Miller",
        date: "August 13, 2017"
    },
    {
        id: "2017_08_20TK",
        title: "Humility, Servanthood and Stiff-necked People",
        preacher: "Tom Kraeuter",
        date: "August 20, 2017"
    },
    {
        id: "2017_09_03GK",
        title: "guest speaker -- Glenn Kaiser",
        preacher: "",
        date: "September 03, 2017"
    },
    {
        id: "2017_09_10TK",
        title: "Discord",
        preacher: "Tom Kraeuter",
        date: "September 10, 2017"
    },
    {
        id: "2017_09_17WD",
        title: "Let Love Cover a Multitude of Sins",
        preacher: "Wayne DeCloux",
        date: "September 17, 2017"
    },
    {
        id: "2017_09_24SM",
        title: "Seeds and Roots",
        preacher: "Steve Miller",
        date: "September 24, 2017"
    },
    {
        id: "2017_10_01WH",
        title: "Getting Rid of Strife",
        preacher: "Warren Henriksen",
        date: "October 01, 2017"
    },
    {
        id: "2017_10_08DR",
        title: "Discord",
        preacher: "Daryl Roth",
        date: "October 08, 2017"
    },
    {
        id: "2017_10_15WD",
        title: "A Legacy of Grace",
        preacher: "Wayne DeCloux",
        date: "October 15, 2017"
    },
    {
        id: "2017_10_22TK",
        title: "Flinging Seeds",
        preacher: "Tom Kraeuter",
        date: "October 22, 2017"
    },
    {
        id: "2017_10_29WB",
        title: "guest speaker -- WF Bridges",
        preacher: "",
        date: "October 29, 2017"
    },
    {
        id: "2017_11_05SM",
        title: "Be Thou My Vision",
        preacher: "Steve Miller",
        date: "November 05, 2017"
    },
    {
        id: "2017_11_12DR",
        title: "Ya'll Come",
        preacher: "Daryl Roth",
        date: "November 12, 2017"
    },
    {
        id: "2017_11_23DK",
        title: "Thanksgiving",
        preacher: "Dan Kennedy",
        date: "November 23, 2017"
    },
    {
        id: "2017_11_26TK",
        title: "A Mild Form of Atheism",
        preacher: "Tom Kraeuter",
        date: "November 26, 2017"
    },
    {
        id: "2017_12_10RS",
        title: "guest speaker -- Ryan Sutton",
        preacher: "",
        date: "December 10, 2017"
    },
    {
        id: "2017_12_17WD",
        title: "Knock, Knock",
        preacher: "Wayne DeCloux",
        date: "December 17, 2017"
    },
    {
        id: "2017_12_24DR",
        title: "Oh What Joy",
        preacher: "Daryl Roth",
        date: "December 24, 2017"
    },
    {
        id: "2017_12_31TK",
        title: "God Restores, Redeems, Renames and Resurrects",
        preacher: "Tom Kraeuter",
        date: "December 31, 2017"
    },
    {
        id: "2018_01_07VN",
        title: "guest speaker -- Vincent Newfield",
        preacher: "",
        date: "January 07, 2018"
    },
    {
        id: "2018_01_14TK",
        title: "2018 Priorities",
        preacher: "Tom Kraeuter",
        date: "January 14, 2018"
    },
    {
        id: "2018_01_21WD",
        title: "God Loves You!",
        preacher: "Wayne DeCloux",
        date: "January 21, 2018"
    },
    {
        id: "2018_01_28SM",
        title: "God Is Good",
        preacher: "Steve Miller",
        date: "January 28, 2018"
    },
    {
        id: "2018_02_04DR",
        title: "To Whom Will You Compare Me?",
        preacher: "Daryl Roth",
        date: "Feburary 4, 2018"
    },
    {
        id: "2018_02_18WD",
        title: "Our Gracious God",
        preacher: "Wayne DeCloux",
        date: "Feburary 18, 2018"
    },
    {
        id: "2018_02_25SM",
        title: "God is Faithful",
        preacher: "Steve Miller",
        date: "Feburary 25, 2018"
    },
    {
       id: "2018_03_04TK",
       title: "God is Just (Part 1)",
       preacher: "Tom Kraeuter",
       date: "March 4, 2018"
    },
    {
       id: "2018_03_11TK",
       title: "God is Just (Part 2)",
       preacher: "Tom Kraeuter",
       date: "March 11, 2018"
    },
    {
       id: "2018_03_16SFnSG",
       title: "Christ in us Conference",
       preacher: "Steven Fry, Scott Goodwill",
       date: "March 16, 2018"
    },
    {
       id: "2018_03_17SFnSG-M",
       title: "Christ in us Conference - Morning",
       preacher: "Steven Fry, Scott Goodwill",
       date: "March 17, 2018"
      },
    {
       id: "2018_03_17SFnSG-A",
       title: "Christ in us Conference - Afternoon",
       preacher: "Steven Fry, Scott Goodwill",
       date: "March 17, 2018"
    },
    {
       id: "2018_03_17SFnSG-E",
       title: "Christ in us Conference - Evening",
       preacher: "Steven Fry, Scott Goodwill",
       date: "March 17, 2018"
    },
    {
       id: "2018_03_18SFnSG",
       title: "Christ in us Conference",
       preacher: "Steven Fry, Scott Goodwill",
       date: "March 18, 2018"
    },
      {
         id: "2018_03_25DR",
       title: "Come to the Table",
       preacher: "Daryl Roth",
       date: "March 25, 2018"
    },
    {
         id: "2018_04_01WD",
       title: "What is So Special About Easter?",
       preacher: "Wayne DeCloux",
       date: "April 1, 2018"
    },
    {
         id: "2018_04_08TK",
       title: "God is Eternal",
       preacher: "Tom Kraeuter",
       date: "April 8, 2018",
           doctype: "pdf"
    },
    {
       id: "2018_04_15SM",
       title: "God is a Rewarder",
       preacher: "Steve Miller",
       date: "April 15, 2018",
           doctype: "pdf"
    },
    {
         id: "2018_04_29WD",
       title: "Trials and Tribulations",
       preacher: "Wayne DeCloux",
       date: "April 29, 2018",
       doctype: "pdf"
    },
    {
   id: "2018_05_06SM",
       title: "God is the Comforter",
       preacher: "Steve Miller",
       date: "May 6, 2018",
       doctype: "doc"
    },
    {
       id: "2018_05_13SK",
       title: "God With Us",
       preacher: "Stephen Kraeuter",
       date: "May 13, 2018",
       doctype: "doc"
    },
    {
   id: "2018_05_20SK",
       title: "Be Immitators of God",
       preacher: "Stephen Kraeuter",
       date: "May 20, 2018",
    doctype: "doc"
    },
    {
   id: "2018_05_25DR",
       title: "",
       preacher: "Daryl Roth",
       date: "May 25, 2018",
    doctype: "doc"
    },
    {
   id: "2018_06_10WD",
       title: "Glorious",
       preacher: "Wayne DeCloux",
       date: "June 10, 2018",
    doctype: "doc"
    },
    {
   id: "2018_06_17TK",
       title: "",
       preacher: "Tom Kraeuter",
       date: "June 17, 2018",
    doctype: "doc"
    },
    {
   id: "2018_06_24SM",
       title: "",
       preacher: "Steve Miller",
       date: "June 24, 2018",
    doctype: "doc"
    },
    {
   id: "2018_07_01WD",
       title: "The Attributes of God in The Beatitudes",
       preacher: "Wayne DeCloux",
       date: "July 1, 2018",
    doctype: "doc"
    },
    {
   id: "2018_07_08DR",
       title: "Sermon",
       preacher: "Daryl Roth",
       date: "July 7, 2018",
    doctype: "doc"
    },
    {
   id: "2018_07_15TK",
       title: "God is Jealous",
       preacher: "Tom Kraeuter",
       date: "July 15, 2018",
    doctype: "pdf"
    },
    {
   id: "2018_07_22SM",
       title: "The God of Peace",
       preacher: "Steve Miller",
       date: "July 22, 2018",
    doctype: "doc"
    },
    {
    id: "2018_07_29DR",
    title: "Oh What Peace",
    preacher: "Daryl Roth",
    date: "July 29 2018",
    doctype: "pdf"
    },
    {
        id: "2018_08_05WH",
        title: "Sermon",
        preacher: "Warren Henriksen",
        date: "August 8, 2018",
        doctype: "pdf"
    },
    {
        id: "2018_08_12TK",
        title: "The God of All Comfort",
        preacher: "Tom Kraeuter",
        date: "August 12, 2018",
        doctype: "pdf"
    },	  
    {
        id: "2018_08_19JD",
        title: "Peace",
        preacher: "Josiah DeRoose",
        date: "August 19, 2018",
        doctype: "pdf"
    },  
    {
        id: "2018_08_26SM",
        title: "God Is Righteous",
        preacher: "Steve Miller",
        date: "August 26, 2018",
        doctype: "doc"
    },        
    {
        id: "2018_09_02DR",
        title: "The Divine Constant",
        preacher: "Daryl Roth",
        date: "September 2, 2018",
        doctype: "doc"
    }, 
    {
        id: "2018_09_09WD",
        title: "God is Holy",
        preacher: "Wayne DeCloux",
        date: "September 9, 2018",
        doctype: "doc"
    },
    {
        id: "2018_09_16TK",
        title: "",
        preacher: "Tom Kraeuter",
        date: "September 16, 2018",
        doctype: "doc"
    },
    {
        id: "2018_09_23WH",
        title: "The Lovingkindness of the Lord",
        preacher: "Warren Henriksen",
        date: "September 23, 2018",
        doctype: "doc"
    },
      {
      id: "2018_09_30SM",
      title: "Hearing the Shepards Voice",
      preacher: "Steve Miller",
      date: "September 30, 2018",
      doctype: "doc"
    },
      {
      id: "2018_10_07DR",
      title: "Joy in the Journey",
      preacher: "Daryl Roth",
      date: "October 7, 2018",
      doctype: "doc"
    },
      {
      id: "2018_10_14WD",
      title: "For the Joy Set Before Us",
      preacher: "Wayne DeCloux",
      date: "October 14, 2018",
      doctype: "doc"
    },  
      {
      id: "2018_10_21DK",
      title: "Worship in Spirit and Truth",
      preacher: "Dan Kennedy",
      date: "October 21, 2018",
      doctype: "doc"
    },
      {
      id: "2018_10_28TK",
      title: "Consider Yourself Dead to Sin",
      preacher: "Tom Kraeuter",
      date: "October 28, 2018",
      doctype: "doc"
    },   
      {
      id: "2018_11_04WH",
      title: "Warren Henriksen",
      preacher: "Warren Henriksen",
      date: "November 4, 2018",
      doctype: "doc"
    },
      {
      id: "2018_11_11SK",
      title: "Let Love Be Your Highest Goal",
      preacher: "Stephen Kraeuter",
      date: "November 11, 2018",
      doctype: "doc"
    },
      {
      id: "2018_11_18SM",
      title: "Growing in Grace to Maturity",
      preacher: "Stephen Miller",
      date: "November 18, 2018",
      doctype: "doc"
    },                    
      {
      id: "2018_11_25DR",
      title: "We Will Remember The Lord Our God",
      preacher: "Daryl Roth",
      date: "November 25, 2018",
      doctype: "pdf"
    }, 
      {
      id: "2018_12_02WD",
      title: "Perspective",
      preacher: "Wayne DeCloux",
      date: "December 2, 2018",
      doctype: "pdf"
    },
      {
      id: "2018_12_09WH",
      title: "Warren Henriksen",
      preacher: "Warren Henriksen",
      date: "December 9, 2018",
      doctype: "pdf"
    },
      {
      id: "2018_12_16SM",
      title: "Prepared for the Bridegroom",
      preacher: "Stephen Miller",
      date: "December 16, 2018",
      doctype: "doc"
    },
      {
      id: "2018_12_23TK",
      title: "Immanuel, God With Us",
      preacher: "Tom Kraeuter",
      date: "December 23, 2018",
      doctype: "doc"
    },
      {
      id: "2018_12_30DR",
      title: "Do You Hear what I Hear?",
      preacher: "Daryl Roth",
      date: "December 30, 2018",
      doctype: "doc"
    },
      {
      id: "2019_01_06DK",
      title: "On Earth as it is in Heaven and the Resurrection",
      preacher: "David Kraeuter",
      date: "January 6, 2019",
      doctype: "doc"
    },
      {
      id: "2019_01_13SK",
      title: "The Mission of the Church",
      preacher: "Stephen Kraeuter",
      date: "January 13, 2019",
      doctype: "doc"
    },
      {
      id: "2019_01_20DK",
      title: "Kingdom of God",
      preacher: "David Kraeuter",
      date: "January 20, 2019",
      doctype: "doc"
    },
      {
      id: "2019_01_27SK",
      title: "The Object of Our Faith",
      preacher: "Stephen Kraeuter",
      date: "January 27, 2019",
      doctype: "doc"
    },
      {
      id: "2019_02_03WD",
      title: "Welcome to Your Life",
      preacher: "Wayne DeCloux",
      date: "February 3, 2019",
      doctype: "docx"
    },
     {
      id: "2019_02_17TK",
      title: "Who We Are in Christ",
      preacher: "Tom Kraeuter",
      date: "February 17, 2019",
      doctype: "pdf"
    },
      {
      id: "2019_02_24SM",
      title: "You Are the Body of Christ",
      preacher: "Stephen Miller",
      date: "February 24, 2019",
      doctype: "doc"
    },
      {
      id: "2019_03_10SK",
      title: "Faith: Not By Sight",
      preacher: "Stephen Kraeuter",
      date: "March 10, 2019",
      doctype: "doc"
    },
      {
      id: "2019_03_17DR",
      title: "A Cleft in the Rock Moment",
      preacher: "Daryl Roth",
      date: "March 17, 2019",
      doctype: "doc"
    },
      {
      id: "2019_03_24SM",
      title: "You are a Child in God's Family",
      preacher: "Stephen Miller",
      date: "March 24, 2019",
      doctype: "doc"
    },
      {
      id: "2019_03_31DK",
      title: "Mission Report",
      preacher: "Warren Henriksen and Dan Kennedy",
      date: "March 31, 2019",
      doctype: "doc"
    },
      {
      id: "2019_04_07TK",
      title: "Let Your Kingdom Come",
      preacher: "Tom Kraeuter",
      date: "April 7, 2019",
      doctype: "doc"
    },
      {
      id: "2019_04_14DR",
      title: "Jesus, The Real Anchorman",
      preacher: "Daryl Roth",
      date: "April 14, 2019",
      doctype: "doc"
    },
      {
      id: "2019_04_21SK",
      title: "Christ's Life: Our Life",
      preacher: "Stephen Kraeuter",
      date: "April 21, 2019",
      doctype: "doc"
    },        
      {
      id: "2019_04_28WD",
      title: "A Love Story From Christ",
      preacher: "Wayne DeCloux",
      date: "April 28, 2019",
      doctype: "docx"
    }, 
      {
      id: "2019_05_05SM",
      title: "In Christ We Are Spiritual People",
      preacher: "Stephen Miller",
      date: "May 05, 2019",
      doctype: "doc"
    }, 
      {
      id: "2019_05_12WD",
      title: "A Love Story From Christ (Part 2)",
      preacher: "Wayne DeCloux",
      date: "May 12, 2019",
      doctype: "docx"
    }, 
      {
      id: "2019_05_19DK",
      title: "Power Over The Snake",
      preacher: "David Kraeuter",
      date: "May 19, 2019",
      doctype: "docx"
    },    
      {
      id: "2019_05_26TK",
      title: "Spreading The Kingdom of God",
      preacher: "Tom Kraeuter",
      date: "May 26, 2019",
      doctype: "docx"
    },  
      {
      id: "2019_06_02DR",
      title: "More Than Conquerors",
      preacher: "Daryl Roth",
      date: "June 2, 2019",
      doctype: "docx"
    }, 
      {
      id: "2019_06_09SK",
      title: "Faith: A Call to Maturity",
      preacher: "Stephen Kraeuter",
      date: "June 9, 2019",
      doctype: "docx"
    },
      {
      id: "2019_06_16WD",
      title: "It is Finished",
      preacher: "Wayne DeCloux",
      date: "June 16, 2019",
      doctype: "docx"
    },  
      {
      id: "2019_06_23WH",
      title: "The Great Investment",
      preacher: "Warren Henriksen",
      date: "June 23, 2019",
      doctype: "docx"
    },  
      {
      id: "2019_06_30SM",
      title: "In Christ You Are Holy",
      preacher: "Stephen Miller",
      date: "June 30, 2019",
      doctype: "pdf"
    },
      {
      id: "2019_07_07TK",
      title: "The Gifts of the Holy Spirit and Prayer",
      preacher: "Tom Kraeuter",
      date: "July 7, 2019",
      doctype: "pdf"
    },
      {
      id: "2019_07_14TK",
      title: "Prayer and Revival",
      preacher: "Tom Kraeuter",
      date: "July 14, 2019",
      doctype: "pdf"
    },
      {
      id: "2019_07_21DR",
      title: "Behold",
      preacher: "Daryl Roth",
      date: "July 21, 2019",
      doctype: "pdf"
    },
      {
      id: "2019_07_28PB",
      title: "We Have All Been Dropped",
      preacher: "Phil Brownlee",
      date: "July 28, 2019",
      doctype: "pdf"
    },
      {
      id: "2019_08_04SM",
      title: "You Are Laborers in God�s Harvest",
      preacher: "Stephen Miller",
      date: "August 8, 2019",
      doctype: "docx"
    },
      {
      id: "2019_08_11SK",
      title: "Faith: Taking Hold of Grace",
      preacher: "Stephen Kraeuter",
      date: "August 11, 2019",
      doctype: "docx"
    },
      {
      id: "2019_08_18WH",
      title: "The Fellowship of the Faith",
      preacher: "Warren Henriksen",
      date: "August 18, 2019",
      doctype: "docx"
    },
      {
      id: "2019_08_25DK",
      title: "Awaken",
      preacher: "Dan Kennedy",
      date: "August 25, 2019",
      doctype: "docx"
    },
      {
      id: "2019_09_01TK",
      title: "Holy Spirit (part 1)",
      preacher: "Tom Kraeuter",
      date: "September 1, 2019",
      doctype: "docx"
    },
      {
      id: "2019_09_08TK",
      title: "Holy Spirit (part 2)",
      preacher: "Tom Kraeuter",
      date: "September 8, 2019",
      doctype: "docx"
    },
      {
      id: "2019_09_15DR",
      title: "No Recording... Sorry.",
      preacher: "",
      date: "September 15, 2019",
      doctype: "docx"
    },
      {
      id: "2019_09_22DK",
      title: "Theology You Can Get Your Hands On",
      preacher: "David Kraeuter",
      date: "September 22, 2019",
      doctype: "docx"
    },  
      {
      id: "2019_09_29DK",
      title: "Time to Set Sail",
      preacher: "David Kraeuter",
      date: "September 29, 2019",
      doctype: "docx"
    },   
      {
      id: "2019_10_06TK",
      title: "The Gifts of the Holy Spirit - Intro",
      preacher: "Tom Kraeuter",
      date: "October 6, 2019",
      doctype: "pdf"
    }, 
      {
      id: "2019_10_13WH",
      title: "Gifts of Faith - Gifts of Healing",
      preacher: "Warren Henriksen",
      date: "October 13, 2019",
      doctype: "docx"
    },  
      {
      id: "2019_10_20WH",
      title: "Gifts of Working of Miracles",
      preacher: "Warren Henriksen",
      date: "October 20, 2019",
      doctype: "docx"
    }, 
      {
      id: "2019_10_27WH",
      title: "Gifts of Utterance/A Closer Look at the Gift of Prophesy",
      preacher: "Daryl Roth and Wayne DeCloux",
      date: "October 27, 2019",
      doctype: "docx"
    }, 
      {
      id: "2019_11_03SM",
      title: "The Gifts of Tongues and Interpretation",
      preacher: "Stephen Miller",
      date: "November 03, 2019",
      doctype: "docx"
    }, 
      {
      id: "2019_11_10KW",
      title: "Guest Speaker",
      preacher: "Kurt Wilson",
      date: "November 10, 2019",
      doctype: "docx"
    },  
      {
      id: "2019_11_17SK",
      title: "Spiritual Gifts: The Blessing of Eden",
      preacher: "Stephen Kraeuter",
      date: "November 17, 2019",
      doctype: "docx"
    }, 
      {
      id: "2019_11_24CK",
      title: "Spiritual Gifts",
      preacher: "Carl Keener",
      date: "November 24, 2019",
      doctype: "docx"
    },
      {
      id: "2019_12_01WD",
      title: "Joy to the World",
      preacher: "Wayne DeCloux",
      date: "December 1, 2019",
      doctype: "docx"
    }, 
      {
      id: "2019_12_08TK",
      title: "God is the Author",
      preacher: "Tom Kraeuter",
      date: "December 8, 2019",
      doctype: "pdf"
    }, 
      {
      id: "2019_12_15WH",
      title: "Highly Favored and Blessed",
      preacher: "Warren Henriksen",
      date: "December 15, 2019",
      doctype: "docx"
    }, 
      {
      id: "2019_12_22SM",
      title: "Receive the Gift of Jesus",
      preacher: "Stephen Miller",
      date: "December 22, 2019",
      doctype: "docx"
    }, 
      {
      id: "2019_12_29DR",
      title: "Bold as a Lion",
      preacher: "Daryl Roth",
      date: "December 29, 2019",
      doctype: "docx"
    },  
      {
      id: "2020_01_05SK",
      title: "Revelation of Jesus Christ",
      preacher: "Stephen Kraeuter",
      date: "January 5, 2020",
      doctype: "docx"
    },
      {
      id: "2020_01_12WD",
      title: "",
      preacher: "Wayne DeCloux",
      date: "January 12, 2020",
      doctype: "docx"
    },  
      {
      id: "2020_01_19WH",
      title: "The Healing of Our Nation",
      preacher: "Wayne Henriksen",
      date: "January 19, 2020",
      doctype: "docx"
    }, 
      {
      id: "2020_01_26TK",
      title: "2020 Overview",
      preacher: "Tom Kraeuter",
      date: "January 26, 2020",
      doctype: "docx"
    }, 
      {
      id: "2020_02_02SM",
      title: "Becoming Righteous",
      preacher: "Stephen Miller",
      date: "February 2, 2020",
      doctype: "docx"
    },         
];

function addSermonData(id, title, preacher, date, tags){

}


/**
    var sermons = {
      1021{
          id: "2017_01_01DR",
          title: "-",
          preacher: "Daryl Roth",
          date: "January 01, 2017"
      },
      1022{
          id: "2017_01_08AW",
          title: "-",
          preacher: "",
          date: "January 08, 2017"
      }, 
    1023{
        id: "2020_02_02SM",
        title: "Becoming Righteous",
        preacher: "Stephen Miller",
        date: "February 2, 2020",
        doctype: "docx"
      },         
};
*/
//   var max = 1156;
//   var min = 1000;
//   initSermons(max);