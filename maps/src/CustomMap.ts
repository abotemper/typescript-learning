import { User } from "./User";
import { Company } from "./Company";

//instructions to every other class
//on how they can be an argument to 'addmaker'
//interface里的对象内的东西必须用;分开
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent() : string;

}

export class CustomMap {
  public googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    }); 
  }
//这样写两个这么相似的代码就是狮山代码,需要我们进行抽象一波，所以 抽象能力，形容能力，总结共同特点能力很重要
//   addUserMarker (user: User): void {
//      new google.maps.Marker({
//       map: this.googleMap,
//       position: {
//         lat: user.location.lat,
//         lng: user.location.lng
//       }
//      })
//   }

//   addCompanyMarker(company: Company): void {
//       new google.maps.Marker({
//         map: this.googleMap,
//         position: {
//           lat: company.location.lat,
//           lng: company.location.lng
//         }
//       })
//   }
// }

//这个也不够完美，因为如果有n个有position的东西，难道我们都给mappable里写进来吗
//最好告诉他们谁想进来他必须有position这样的property
//这时候就要用interface了，来确定他们自己是否mappable
addMarker (mappable: Mappable): void {
  //mappable. 后面只能获得二者共同的部分
  const marker = new google.maps.Marker({
   map: this.googleMap,
   position: {
     lat: mappable.location.lat,
     lng: mappable.location.lng
   }
  })

  marker.addListener('click', () => {
    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent()
    });
    infoWindow.open(this.googleMap, marker);
  })
  
}
}