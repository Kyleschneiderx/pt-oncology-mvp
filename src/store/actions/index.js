import { SIGN_IN, SIGN_OUT, SIGN_UP, REGISTER_PATIENT } from '../actions/types';

/// User actions ===========

export const registerPatient =({email,firstName, lastName, phoneNumber, DOB, doctor, date_of_diagnosis,diagnosis, notes})=>async dispatch =>{

    const body = {
        query:`
         mutation {
             createPatient(PatientInput:{email: "${email}", firstName: "${firstName}",lastName:"${lastName}", phoneNumber: "${phoneNumber}",
                  diagnosis:"${diagnosis}" 
             			date_of_diagnosis:"${date_of_diagnosis}",
                   DOB: "${DOB}",
                   doctor: "${doctor}",
                   notes: "${notes}" }){
               _id
               firstName
               lastName
               DOB
               doctor
             }
           }
          `
        
    }

    console.log(body)

    const request = await fetch('http://localhost:8080/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
        .then(res => {
          console.log(res)
          return res.json();
        })
        // .then(resData => {
        //   if (resData.errors && resData.errors[0] === 422) {
        //     throw new Error(
        //       "Validation failed. Make sure the email address isn't used yet!"
        //     );
        //   }
        //   if(resData.errors){
        //     throw new Error('User creation failed')
        //   }


        // })
        .then(data => {    
          console.log(data)     
          return data.data.createdPatient
        }).catch(error =>{
          console.log(error)
        })
        // console.log(this.props)
        // // console.log(request.createUser._id, "Hello")
        // console.log(request.token)
        // this.props.history.push('/quiz');
    dispatch({
        type: REGISTER_PATIENT,
        payload: request
    })
}


export const signUp =({email,name, password, phoneNumber})=>async dispatch =>{

  const body = {
      query:`
        mutation{
          createUser(email:"${email}",name:"${name}", password: "${password}", phoneNumber:"${phoneNumber}"){
            _id
            email
            token
          }
        }
        `
      
  }

  const request = await fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => {    
        return res.json();
      })
      // .then(resData => {
      //   if (resData.errors && resData.errors[0] === 422) {
      //     throw new Error(
      //       "Validation failed. Make sure the email address isn't used yet!"
      //     );
      //   }
      //   if(resData.errors){
      //     throw new Error('User creation failed')
      //   }


      // })
      .then(data => {
        return data.data.createUser
      }).catch(error =>{
        console.log(error)
      })
      console.log(request._id, "Just Request")
      // console.log(request.createUser._id, "Hello")
      console.log(request.token)
  dispatch({
      type: SIGN_UP,
      id: request._id,
      payload: request.token
  })
}


// export const signUp =()=>{
//     return {
//         type:SIGN_UP
        
//     }
// }


export const signIn =({email, password})=> async dispatch =>{

  const body = {
    query:`
    {
      login(email:"${email}", password:"${password}"){
        token
        userId
      }
    }
      `  
  }
  console.log(body, "body")

  const request = await fetch('http://localhost:8080/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => {    
      return res.json();
    })
    // .then(resData => {
    //   if (resData.errors && resData.errors[0] === 422) {
    //     throw new Error(
    //       "Validation failed. Make sure the email address isn't used yet!"
    //     );
    //   }
    //   if(resData.errors){
    //     throw new Error('User login failed')
    //   }

    // })
    .then(resData => {
      console.log(resData, "resData");
      return (resData.data.login)
    })
    .catch(err => {
      console.log(err, "error");
    });




    console.log(request, "request")

    dispatch({
        type:SIGN_IN,
        id:request.userId,
        payload:request.token     
    })
}

export const signOut =()=>{
    return {
        type:SIGN_OUT,
        
    }
}


export const auth =()=>{
    return dispatch =>{
        dispatch(signUp())
    }
}