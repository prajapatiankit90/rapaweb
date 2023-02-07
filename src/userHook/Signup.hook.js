import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../Slice/user.slice';
import { useNavigate } from 'react-router-dom';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Device } from '@capacitor/device';
import axios from 'axios';

const useSignup = () => {
    
    const history = useNavigate();
    const initialState = {
        PUNAME: "",
        PEMAIL: '',
        PPASSWORD: '',
        PCONTACTNO: '',
        PLOCATION: '',
        PMAC: '',
        PACTIVE: 'N'
    }
    const [data, setData] = useState(initialState);
    // const [userList, setUserList] = useState([])

    useLayoutEffect(() => {
        const device = Device.getId();
        device.then((result) => {
            setData({ ...data, PMAC: result.uuid })
        })
    }, [])

    console.log(data.PMAC)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const dispatch = useDispatch()
    const { userList } = useSelector((state) => state.users)
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const Submit = () => {
        let value = 0;
        if (data.PUNAME === "") {
            alert("Please Enter User Name...!")
        } else if (data.PEMAIL === "") {
            alert("Please Enter Email Id...!")
        } else if (data.PCONTACTNO === "") {
            alert("Please Enter Contact No...!")
        } else if (data.PLOCATION === "") {
            alert("Please Enter Location No...!")
        } else if (data.PPASSWORD === "") {
            alert("Please Enter Password...!")
        } else {
            debugger
            for (var i = 0; i < userList.length; i++) {
                if (userList[i].UNAME === data.PUNAME && userList[i].MAC === data.PMAC) {
                    value = 1;
                }
            }

            if (value !== 1) {
                axios.post("http://203.109.68.94:2110/api/ApiServices/retNewUserInsert", data)
                    .then(res => {
                        if (res.status === 200) {
                            console.log(res.data)
                            alert("SUCCESSFULLY SAVED!");
                            GotoLogin()
                        }
                    })
                    .catch(err => {
                        console.error(err.message)
                    })
            }
            else {
                alert("USER ALREADY EXISTS!");
            }
        }
    }

    const clearData = () => {
        setData({ ...initialState })
    }

    const GotoLogin = () => {
        history("/login")
    }

    return { clearData, Submit, data, handleChange, GotoLogin }
}

export default useSignup;