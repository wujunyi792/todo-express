import { User, UserModel } from "../model/sql/user";

export async function TestDB() {
    let mod:User = {
        username:"wujunyi666",
        password:"wccw",
        salt:"666",
        phone:"191",
      }
    const res = await UserModel.create(mod).then(res => res._id).catch(err => {
        console.log(err.message);
        
    })
    console.log(res);
}