import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class GlobelServiceService {
  // url = "http://localhost:3000/position";

  // moviesData: any = [
  //   "Dangal",
  //   "Kal ho na ho",
  //   "Tare jamin par",
  //   "3 Idiots",
  //   "Kick",
  //   "Dabang",
  // ];
 

  Players = [
    {
      player_role:'Batsman',
      player: [
      {
        path: "assets/viratKohli.jpg",
        name: "Virat Kohli",
        detail: {
          born: "Nov 05, 1988 (31 years)",
          birthplace: "Delhi",
          height: "5 ft 9 in (175 cm)",
          role: "Batsman",
          battingstyle: "Right Handed Bat",
          bowlingstyle: "Right-arm medium",
        },
      },
      {
        path: "assets/YuvrajSingh.jpg",
        name: "Yuvraj Singh",
        detail: {
          born: "Dec 12, 1981 (38 years)",
          birthplace: "Chandigarh",
          height: "6 ft 2 in (188 cm)",
          role: "Batting Allrounder",
          battingstyle: "Left Handed Bat",
          bowlingstyle: "Left-arm orthodox",
        },
      },
    
      {
        path: "assets/RohitSharma.jpg",
        name: "Rohit Sharma",
        detail: {
          born: "Apr 30, 1987 (33 years)",
          birthplace: "Nagpur",
          height: "6 ft 2 in (188 cm)",
          role: "Batsman",
          battingstyle: "Right Handed Bat",
          bowlingstyle: "Right-arm offbreak",
        },
      }
    ]
  },
  {
    player_role:'Bowler',
    player: [
      {
        path: "assets/Bumrah.jpg",
        name: "Jasprit Bumrah",
        detail: {
          born: "Dec 06, 1993 (26 years)",
          birthplace: "Ahmedabad",
          height: "6 ft 1 in (185 cm)",
          role: "Bowler",
          battingstyle: "Right Handed Bat",
          bowlingstyle: "Right-arm fast",
        },
      },
      {
        path: "assets/BKumar.jpg",
        name: "Bhuvneshwar Kumar",
        detail: {
          born: "Feb 05, 1990 (30 years)",
          birthplace: "Meerut",
          height: "6 ft 2 in (188 cm)",
          role: "Bowler",
          battingstyle: "Right Handed Bat",
          bowlingstyle: "Right-arm fast-medium",
        },
      },
    
      {
        path: "assets/IshantSharma.jpg",
        name: "Ishant Sharma",
        detail: {
          born: "Sep 02, 1988 (32 years)",
          birthplace: "Delhi",
          height: "6 ft 5 in (195 cm)",
          role: "Bowler",
          battingstyle: "Right Handed Bat",
          bowlingstyle: "Right-arm fast-medium",
        },
      }
    ]
  }
  ]

   
  users: any = [
    {
      id: 1,
      username: "Pramod",
      password: "4444",
    },
    {
      id: 2,
      username: "Jayesh",
      password: "4444",
    },

    {
      id: 3,
      username: "Sumeet",
      password: "4444",
    },
    {
      id: 4,
      username: "Jitesh",
      password: "4444",
    },
  ];

  constructor(private http: HttpClient) {

    // this.dataPost()
    
  }

  updateItem(item) {
    let url = 'https://www.ecomtrails.com/ecom_api_test/index.php/user/insert_website_template';
    return this.http.put(url, item);
  }

  postdata(data){
  return  this.http.post('https://www.ecomtrails.com/ecom_api_test/index.php/user/insert_website_template',
  data)
  }
dataPost(){
  return this.http.post(
    'https://www.ecomtrails.com/ecom_api_test/index.php/user/insert_website_template',
    {pos_1:this.Players,comp_num:'56'}).subscribe((res:any)=>{
      return res;
    })
}

  getData() {
    return this.http.post(
      "https://www.ecomtrails.com/ecom_api_test/index.php/user/fetch_website_template",
      {comp_num:'56'}
    );
  }

  user: any;
  setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  removeLocalStorage(key) {
    return localStorage.removeItem(key);
  }

  isLogin() {
    let user = this.getLocalStorage("User");
    if (user && user.username && user.password) {
      return true;
    } else {
      return false;
    }
  }
}
