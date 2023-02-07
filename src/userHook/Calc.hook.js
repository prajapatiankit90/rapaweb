import { useState, useEffect } from 'react';
import axios from 'axios';
import { SocialSharing } from '@ionic-native/social-sharing'
import * as htmlToImage from 'html-to-image';


const useCalc = () => {
    const URL = "http://203.109.68.94:2110/api/ApiServices/"
    //const URL = "http://localhost:54621/api/ApiServices/"
    const [flag, setFlag] = useState({
      pFlag: 'G'
    });
  
   
    const getUserName = JSON.parse(localStorage.getItem('user'));
  
    const reqObj = {
      // PCOMP: 1,
      PFLAG: flag,
      PCTS: '',
      PSHAPE: '',
      PSHADE: '',
      PPURITY: '',
      PCUT: 'EX',
      PFLOUROSENCE: 'NONE',
      PSUBCOLOR: '',
      PPOLISH: 'EX',
      PSEMMENTRY: 'EX',
      PLUSTER: '',
      PLABNM: 'GIA',
      PTOTDEPTH: '',
      PDIAMETER: '',
      POPEN: '',
      POPENTABLE: '',
      POPENCROWN: '',
      POPENPAV: '',
      PNATTS: '',
      PNATTSTABLE: '',
      PNATTSCROWN: '',
      PNATTSPAV: '',
      PRATIO: '',
      PCULET: 'PO',
      PPTABLE: '',
      PTABLEINCL: 'NA',
      PTYPEINCL: 'NA',
      PINTGRAIN: 'NA',
      PSURGRAIN: 'NA',
      PEYE_CLEAN: 'NA',
      PWEIGHT: "",
      PTRFLAG: "TRANSACTION",
      PUNIT: "GITANJALI",
      PWHITE_INCL: '',
      PWHITE_INCL1: '',
      PWHITE_INCL2: '',
      PWHITE_INCL3: '',
      PEXTRA_FACET1: '',
      PEXTRA_FACET2: '',
      PEXTRA_FACET3: '',
      ROUGHCTS: '',
      PUSERNM: getUserName.username.toUpperCase()
    }
  
    const labobj = {
      PCOMP: 1,
      PSHAPE: "",
      PFLAG: "",
      PSHADE: "",
      PPURITY: "",
      PCUT: "",
      PSUBCOLOR: "",
      PFLOUROSENCE: "",
      PWEIGHT: "",
      PTRFLAG: "TRANSACTION",
      PUNIT: "GITANJALI"
    }
  
    const [data, setData] = useState(reqObj);
    
    const [shape, setShape] = useState([]);
    const [shade, setShade] = useState([]);
    const [clarity, setClarity] = useState([]);
    const [cut, setCut] = useState([]);
    const [polish, setPolish] = useState([]);
    const [sym, setSym] = useState([]);
    const [luster, setLuster] = useState([]);
    const [color, setColor] = useState([]);
    const [fl, setFL] = useState([]);
    const [op1, setOp1] = useState([]);
    const [op2, setOp2] = useState([]);
    const [op3, setOp3] = useState([]);
    const [op4, setOp4] = useState([]);
    const [nat1, setNat1] = useState([]);
    const [nat2, setNat2] = useState([]);
    const [nat3, setNat3] = useState([]);
    const [nat4, setNat4] = useState([]);
    const [extra, setExtra] = useState([]);
    const [extra2, setExtra2] = useState([]);
    const [extra3, setExtra3] = useState([]);
    const [whiteinclusion, setWhiteInclusion] = useState([])
    const [whiteinclusion1, setWhiteInclusion1] = useState([])
    const [whiteinclusion2, setWhiteInclusion2] = useState([])
    const [whiteinclusion3, setWhiteInclusion3] = useState([])
    const [result, setResult] = useState({});
    const [savedResult, setSavedResult] = useState([])
    const [DownPurity, setDownPurity] = useState('')
    const [UpPurity, setUpPurity] = useState('')
    const [DownColor, setDownColor] = useState('')
    const [UpColor, setUpColor] = useState('')
  
    const [DownPurityResult, setDownPurityResult] = useState({})
    const [UpPurityResult, setUpPurityResult] = useState({})
    const [DownColorResult, setDownColorResult] = useState({})
    const [UpColorResult, setUpColorResult] = useState({})
    const [image, setImage] = useState();
    const [showBackAlert, setShowBackAlert] = useState(false);
  
  
    // useEffect(() => {
    //   document.addEventListener('ionBackButton', (ev) => {
    //     ev.detail.register(-1, () => {
    //       // when you are in your home(last) page
    //       if (history.location.pathname === '/calc') {
    //         // calling alert box
    //         setShowBackAlert(true);
    //       }
    //     });
    //   });
    // }, [])
  
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
  
      if (flag !== undefined) {
        setFlag({ ...flag, [name]: value });
      }
    }
    useEffect(() => {
      getPurity()
    }, [flag])
  
  
    useEffect(() => {
      getShape()
      getShade()
      getCut()
      getPolish()
      getSym()
      getLuster()
      getColor()
      getFL()
      getOp1()
      getOp2()
      getOp3()
      getOp4()
      getNat1()
      getNat2()
      getNat3()
      getNat4()
      getextrafacts1()
      getextrafacts2()
      getextrafacts3()
      getwhiteinclusion()
      getwhiteinclusion1()
      getwhiteinclusion2()
      getwhiteinclusion3()  
    }, [])
  
    useEffect(() => {
      getLab()
    }, [data])
  
    useEffect(() => {
      const purityIndex = (clarity.findIndex((i) => i.PURITY === data.PPURITY))
      setDownPurity(clarity[purityIndex + 1]?.PURITY)
      setUpPurity(clarity[purityIndex - 1]?.PURITY)
  
      const colorIndex = (shade.findIndex((i) => i.SHADE === data.PSHADE))
      setDownColor(shade[colorIndex + 1]?.SHADE)
      setUpColor(shade[colorIndex - 1]?.SHADE)
  
      // Down Purity
      axios.post(URL + "retRatedisc", { ...data, PPURITY: DownPurity })
        .then(res => {
          setDownPurityResult(res.data.RATE_N_AVGDISC)
        })
  
      // Up Purity
      axios.post(URL + "retRatedisc", { ...data, PPURITY: UpPurity })
        .then(res => {
          setUpPurityResult(res.data.RATE_N_AVGDISC)
        })
  
      // Down Color
      axios.post(URL + "retRatedisc", { ...data, PSHADE: DownColor })
        .then(res => {
          setDownColorResult(res.data.RATE_N_AVGDISC)
        })
      // UP Color
      axios.post(URL + "retRatedisc", { ...data, PSHADE: UpColor })
        .then(res => {
          setUpColorResult(res.data.RATE_N_AVGDISC)
        })
  
    }, [data])
  
    const getLab = async () => {
      await axios.post(URL + "retRatedisc", data)
        .then(res => {
          setResult(res.data)
        })
    }
  
    const getShape = async () => {
      await axios.get(URL + "retShapeMas")
        .then(res => {
          setShape(JSON.parse(res.data))
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getShade = async () => {
      await axios.get(URL + "retShadeMas")
        .then(res => {
          setShade(JSON.parse(res.data))
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getPurity = async () => {
      await axios.get(URL + "retPurityMas")
        .then(res => {
          const data = JSON.parse(res.data)
          const flagData = data.filter((x) => x.FLAG === flag.pFlag)
          setClarity(flagData)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getCut = async () => {
      await axios.get(URL + "retCutMas")
        .then(res => {
          const data = JSON.parse(res.data)
          setCut(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getPolish = async () => {
      await axios.get(URL + "retPolishMas")
        .then(res => {
          const data = JSON.parse(res.data)
          setPolish(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getSym = async () => {
      await axios.get(URL + "retSymMas")
        .then(res => {
          const data = JSON.parse(res.data)
  
          setSym(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getLuster = async () => {
      await axios.get(URL + "retLusterMas")
        .then(res => {
          const data = JSON.parse(res.data)
  
          setLuster(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getColor = async () => {
      await axios.get(URL + "retSubcolorMas")
        .then(res => {
          const data = JSON.parse(res.data)
          setColor(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getFL = async () => {
      await axios.get(URL + "retFlMas")
        .then(res => {
          const data = JSON.parse(res.data)
          setFL(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getOp1 = async () => {
      await axios.get(URL + "retOpen1")
        .then(res => {
          const data = JSON.parse(res.data)
          setOp1(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getOp2 = async () => {
      await axios.get(URL + "retOpen2")
        .then(res => {
          const data = JSON.parse(res.data)
          setOp2(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getOp3 = async () => {
      await axios.get(URL + "retOpen3")
        .then(res => {
          const data = JSON.parse(res.data)
          setOp3(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getOp4 = async () => {
      await axios.get(URL + "retOpen4")
        .then(res => {
          const data = JSON.parse(res.data)
          setOp4(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getNat1 = async () => {
      await axios.get(URL + "retnatts")
        .then(res => {
          const data = JSON.parse(res.data)
  
          setNat1(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getNat2 = async () => {
      await axios.get(URL + "retnatts1")
        .then(res => {
          const data = JSON.parse(res.data)
          setNat2(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getNat3 = async () => {
      await axios.get(URL + "retnatts2")
        .then(res => {
          const data = JSON.parse(res.data)
          setNat3(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getNat4 = async () => {
      await axios.get(URL + "retnatts3")
        .then(res => {
          const data = JSON.parse(res.data)
          setNat4(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getextrafacts1 = async () => {
      await axios.get(URL + "retextrafacts1")
        .then(res => {
          const data = JSON.parse(res.data)
          setExtra(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getextrafacts2 = async () => {
      await axios.get(URL + "retextrafacts2")
        .then(res => {
          const data = JSON.parse(res.data)
          setExtra2(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getextrafacts3 = async () => {
      await axios.get(URL + "retextrafacts3")
        .then(res => {
          const data = JSON.parse(res.data)
          setExtra3(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getwhiteinclusion = async () => {
      await axios.get(URL + "whiteinclusion")
        .then(res => {
          const data = JSON.parse(res.data)
          setWhiteInclusion(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getwhiteinclusion1 = async () => {
      await axios.get(URL + "whiteinclusion1")
        .then(res => {
          const data = JSON.parse(res.data)
          setWhiteInclusion1(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getwhiteinclusion2 = async () => {
      await axios.get(URL + "whiteinclusion2")
        .then(res => {
          const data = JSON.parse(res.data)
          setWhiteInclusion2(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const getwhiteinclusion3 = async () => {
      await axios.get(URL + "whiteinclusion")
        .then(res => {
          const data = JSON.parse(res.data)
          setWhiteInclusion3(data)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    const Result = () => {
      if (data.PCTS !== '') {
        if (savedResult.length === 4) {
          setSavedResult([])
        } else {
          setSavedResult([...savedResult, result])
        }
      }
    }
  
    useEffect(() => {
      handleGeneratePdf()
    }, [savedResult])
  
    const handleGeneratePdf = () => {
      htmlToImage.toPng(document.getElementById('my-node'), { quality: 0.95 })
        .then(function (dataUrl) {
          let img = new Image();
          img.hidden = true
          img.src = dataUrl
          document.body.appendChild(img)
          setImage(img)
        });
    }
  
    const sharing = async () => {
      // SocialSharing.share('',image,'')
      // await SocialSharing.share('Results', 'test', image)   
      await SocialSharing.shareViaWhatsApp('Results', image.src, '');
    }
  
    const deleteResult = (dIndex) => {
      const dataAfterDelete = savedResult.filter((_, index) => index !== dIndex);
      setSavedResult(dataAfterDelete);
    }

    return {data, deleteResult, sharing, Result, handleChange, savedResult, result,setSavedResult, setShowBackAlert,
            shade, shape, clarity ,fl, flag, color, cut, op1, op2, op3, op4, nat1, nat2, nat3, nat4, polish, sym, luster,
            extra, extra2, extra3, whiteinclusion, whiteinclusion1, whiteinclusion2, whiteinclusion3, 
            DownPurityResult, DownColorResult, UpColorResult, UpPurityResult, showBackAlert, DownColor,DownPurity, UpColor, UpPurity
        }
}

export default useCalc;