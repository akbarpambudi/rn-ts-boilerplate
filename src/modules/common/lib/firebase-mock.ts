/***
 * mock auth
 */
export const auth = ()=>{
    const sleep = (delay:number)=> new Promise((resolve)=>setTimeout(resolve,delay));
    return {
        signInWithEmailAndPassword : (username:string,password:string)=> new Promise((resolve,reject)=> sleep(3000).then(()=>(username == 'admin' && password=='admin')?resolve({user:{name:"akbar"}}):reject(new Error("No username or password")))),
        createUserWithEmailAndPassword : (username:string,password:string)=> new Promise((resolve,reject)=> sleep(3000).then(()=>(username == 'admin' && password=='admin')?resolve():reject(new Error("user already exists"))))
    }
}