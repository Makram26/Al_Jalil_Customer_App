
// const BASE_URL = 'http://23.101.22.149:8074';
const BASE_URL = 'https://aljaliltest.ifrs16.app';
const DATABASE_NAME = 'TestOn_12-Oct-2022';
// const DATABASE_NAME = 'TestOn_30-May-2022';

import AsyncStorage from '@react-native-async-storage/async-storage';
export const sendOpt = (username, cnic, mobile) => {
  console.log(`${BASE_URL}/api/signup?username=${username}&cnic=${cnic}&mobile=${mobile}`)
  return fetch(`${BASE_URL}/api/signup?username=${username}&cnic=${cnic}&mobile=${mobile}`, {
    method: 'POST',
    headers: {
    }
  }).then(res => res.json());
}
export const verifyOpt = (otp, requestId) => {
  console.log(`${BASE_URL}/api/signup?otp=${otp}&request_id=${requestId}`)
  return fetch(`${BASE_URL}/api/signup?otp=${otp}&request_id=${requestId}`, {
    method: 'POST',
    headers: {
    }
  }).then(res => res.json());
}
export const resendOtp = (requestId) => {
  return fetch(`${BASE_URL}/resend_otp?request_id=${requestId}`, {
    method: 'POST',
    headers: {
      //   'Content-Type': 'multipart/form-data',
    }
  }).then(res => res.json());
}
export const signUp = (user, cnic, password, confirmPassword) => {
  console.log(`${BASE_URL}/rpc/signup?db=${user.db}&token=${user.token}&login=${cnic}&name=${user.name}&password=${password}&confirm_password=${confirmPassword}`)
  return fetch(`${BASE_URL}/rpc/signup?db=${user.db}&token=${user.token}&login=${cnic}&name=${user.name}&password=${password}&confirm_password=${confirmPassword}`, {
    method: 'POST',
    headers: {
      //   'Content-Type': 'multipart/form-data',
    }
  }).then(res => res.json());
}
export const login = (userName, password) => {
  console.log("user name", userName)
  console.log("password", password)
  console.log(DATABASE_NAME)
  // console.log(`${BASE_URL}/rpc/login?db=${DATABASE_NAME}&username=${userName}&password=${password}`)
  return fetch('https://aljaliltest.ifrs16.app/web/session/authenticate', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      params: {
        login: userName,
        password: password,
        db: DATABASE_NAME
      }
    }),
  }).then(res => res.json());
}


// public User SignUp in Al-jalil-Customer App or Not register user in portal 

export const publicUserSignUp = (userName, email, phone, address, dob, password, confirmPassword) => {

  return fetch('https://aljaliltest.ifrs16.app/signup/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      params: {
        data: {
           name: userName,
           login: email,
           password:password,
           confirm_password:confirmPassword,
           phone:phone,
           street:address,
           dob:dob,
           sel_groups_1_8_9:"8"
        }
      }
    }),
  }).then(res => res.json());
}

export const LogoutAPI = () => {

  return fetch("https://aljaliltest.ifrs16.app/web/session/logout", {
    method: 'GET',
    headers: {
      //   'Content-Type': 'multipart/form-data',
    }
  }).then(res => res);
}
export const AllTransitions = (password, id) => {
  console.log(`${BASE_URL}/api/pages?db=${DATABASE_NAME}&uid=${id}&password=${password}&page=transaction_history`)
  return fetch(`${BASE_URL}/api/pages?db=${DATABASE_NAME}&uid=${id}&password=${password}&page=transaction_history`, {
    method: 'POST',
    headers: {
      //   'Content-Type': 'multipart/form-data',
    }
  }).then(res => res.json());
}
export const AllTransferRequest = (password, id) => {
  console.log(`${BASE_URL}/api/pages?db=${DATABASE_NAME}&uid=${id}&password=${password}&page=requests_history`)
  return fetch(`${BASE_URL}/api/pages?db=${DATABASE_NAME}&uid=${id}&password=${password}&page=requests_history`, {
    method: 'POST',
    headers: {
      //   'Content-Type': 'multipart/form-data',
    }
  }).then(res => res.json());
}
export const HelpDeskGET = (password, id) => {
  console.log(`${BASE_URL}/api/pages?db=${DATABASE_NAME}&uid=${id}&password=${password}&page=helpdesk`)
  return fetch(`${BASE_URL}/api/pages?db=${DATABASE_NAME}&uid=${id}&password=${password}&page=helpdesk`, {
    method: 'GET',
    headers: {
      //   'Content-Type': 'multipart/form-data',
    }
  }).then(res => res.json());
}
export const TransferRequest = (password, id) => {
  console.log(`${BASE_URL}/api/pages?db=${DATABASE_NAME}&uid=${id}&password=${password}&page=transfer_request`)
  return fetch(`${BASE_URL}/api/pages?db=${DATABASE_NAME}&uid=${id}&password=${password}&page=transfer_request`, {
    method: 'POST',
    headers: {
      //   'Content-Type': 'multipart/form-data',
    }
  }).then(res => res.json());
}
export const MemberDetailsCNIC = (password, id, cnic) => {
  console.log(`${BASE_URL}/api/member_via_cnic?db=${DATABASE_NAME}&uid=${id}&password=${password}&cnic=${cnic}`)
  return fetch(`${BASE_URL}/api/member_via_cnic?db=${DATABASE_NAME}&uid=${id}&password=${password}&cnic=${cnic}`, {
    method: 'GET',
    headers: {
      //   'Content-Type': 'multipart/form-data',
    }
  }).then(res => res.json());
}
export const PostMembersDetails = (password, id, fileId, name, father, cnic, type) => {
  console.log(`${BASE_URL}/api/requests/post?db=${DATABASE_NAME}&uid=${id}&password=${password}&type=${type}&file_id=${fileId}&member_detail={"name":"${name}","father_name":"${father ? father : "Test"}","cnic":"${cnic}"}`)
  return fetch(`${BASE_URL}/api/requests/post?db=${DATABASE_NAME}&uid=${id}&password=${password}&type=${type}&file_id=${fileId}&member_detail={"name":"${name}","father_name":"${father ? father : "Test"}","cnic":"${cnic}"}`, {
    method: 'GET',
    headers: {
      //   'Content-Type': 'multipart/form-data',
    }
  }).then(res => res.json());
}
export const HelpDeskTicket = (password, id) => {
  console.log(`${BASE_URL}/api/pages?db=${DATABASE_NAME}&uid=${id}&password=${password}&page=ticket_create`)
  return fetch(`${BASE_URL}/api/pages?db=${DATABASE_NAME}&uid=${id}&password=${password}&page=ticket_create`, {
    method: 'POST',
    headers: {
      //   'Content-Type': 'multipart/form-data',
    }
  }).then(res => res.json());
}
export const PostHelpDeskTicket = (password, subject, id, pid, partner, email, ticketID, sector, plot, priority, description) => {
  console.log(`${BASE_URL}/api/helpdesk/form/submit?db=${DATABASE_NAME}&uid=${id}&password=${password}&name=${subject}&partner_id=${pid}&partner_name=${partner}&partner_email=${email}&ticket_type_id=${ticketID}&sectors_id=${sector}&unit_number=${plot}&priority=${priority}&description=${description}`)
  return fetch(`${BASE_URL}/api/helpdesk/form/submit?db=${DATABASE_NAME}&uid=${id}&password=${password}&name=${subject}&partner_id=${pid}&partner_name=${partner}&partner_email=${email}&ticket_type_id=${ticketID}&sectors_id=${sector}&unit_number=${plot}&priority=${priority}&description=${description}`, {
    method: 'POST',
    headers: {
      //   'Content-Type': 'multipart/form-data',
    }
  }).then(res => res.json());
}
export const AllHomeData = (password, id) => {
  console.log(password)
  console.log(id)
  // console.log(`${BASE_URL}/api/pages?db=${DATABASE_NAME}&uid=${id}&password=${password}&page=home`)
  console.log(`${BASE_URL}/api/pages?page=home`)

  return fetch(`${BASE_URL}/api/pages?page=home`, {
    method: 'GET',
    // headers: {
    //   //   'Content-Type': 'multipart/form-data',
    // },
  }).then(res => res.json());
}
export const CreateHelpDeskTicket = (email, partnerName, subject, type_id, priority, description) => {
  console.log(`${BASE_URL}/helpdesk/form/submit?partner_email=${email}&partner_name=${partnerName}&name=${subject}&ticket_type_id=${type_id}&sectors_id=&unit_number=&priority=${priority}&description=${description}`)
  return fetch(`${BASE_URL}/helpdesk/form/submit?partner_email=${email}&partner_name=${partnerName}&name=${subject}&ticket_type_id=${type_id}&sectors_id=&unit_number=&priority=${priority}&description=${description}`, {
    method: 'GET',
    // headers: {
    //   //   'Content-Type': 'multipart/form-data',
    // },
  }).then(res => res.json());
}
export const storeData = async (userId, password, user_name, registerUser,) => {
  console.log("at services/index=>", registerUser)
  try {
    await AsyncStorage.setItem('user_id', JSON.stringify(userId))
    await AsyncStorage.setItem('password', password)
    await AsyncStorage.setItem('user_name', user_name)
    await AsyncStorage.setItem('registerUser', registerUser)
    console.log(userId)
  } catch (e) {
    console.log("error", e)
    // saving error
  }
}






