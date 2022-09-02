import { User } from "./User";
import { Company } from "./Company";


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

addMarker (mappable: User | Company): void {
  new google.maps.Marker({
   map: this.googleMap,
   position: {
     lat: mappable.location.lat,
     lng: mappable.location.lng
   }
  })
}
}