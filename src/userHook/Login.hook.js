import { useSelector, useDispatch } from 'react-redux';
import {getUsers} from "../Slice/user.slice";
import { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useIonToast } from '@ionic/react';
import { Device } from '@capacitor/device';


const useLogin = () => {
    
    const history = useNavigate();
    const initialState = {
        username: "",
        password: "",
        address: ""
    }
    const [data, setData] = useState(initialState);
    // const [userList, setUserList] = useState([]);

    const dispatch = useDispatch()
    const { userList } = useSelector((state) => state.users)
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch, data])

    const clearData = () => {
        setData({ ...initialState })
    }
    console.log(userList)

    useLayoutEffect(() => {
        const device = Device.getId();
        device.then((result) => {
            setData({ ...data, address: result.uuid })
        })
    }, [])

    console.log(data.address)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const Submit = () => {
        let value = 0;
        let activeStatus = 0;
        if (data.username === "") {
            alert("Please Enter User name..!")
        } else if (data.password === "") {
            alert("Please Enter Password..!")
        } else {
            for (var i = 0; i < userList.length; i++) {
                if (userList[i].UNAME === data.username.toUpperCase() && userList[i].PWD === data.password) {
                    // if (userList[i].UNAME === data.username.toUpperCase() && userList[i].PWD === data.password && userList[i].MAC ===  Device.uuid) {
                    console.log(userList[i].UNAME === data.username)
                    value = 1;
                    localStorage.setItem("user", JSON.stringify(data));
                    localStorage.setItem("token", JSON.stringify(Date.now()));
                    if (userList[i].ACTIVE === 'N') {
                        activeStatus = 1;
                    }
                }
            }
            if (activeStatus === 1) {
                alert("USER NOT ACTIVE. CONTACT TO ADMINISTRATOR!")
            } else {
                if (value === 1) {
                    axios.post("http://203.109.68.94:2110/api/ApiServices/updateLastLogin?PMAC=" + Device.uuid)
                        .then((res) => {
                            console.log(res.data)
                        })
                    history("/calc")
                    setData({ ...initialState })
                }
                else {
                    alert("Invalid Credentials")
                }
            }
        }
    }

    return { Submit, handleChange, clearData, userList, data }
}

export default useLogin;