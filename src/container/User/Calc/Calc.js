import { useState } from 'react';
import IButton from '../../../components/Button';
import './Calc.css';
import Header from '../../../components/Header';
import useCalc from '../../../userHook/Calc.hook';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./Calc.css"

const Calc = () => {
  const [advParameter, setAdvParameter] = useState(false)


  const { data, deleteResult, sharing, Result, handleChange, savedResult, result, setSavedResult, setShowBackAlert,
    shade, shape, clarity, fl, flag, color, cut, op1, op2, op3, op4, nat1, nat2, nat3, nat4, polish, sym, luster,
    extra, extra2, extra3, whiteinclusion, whiteinclusion1, whiteinclusion2, whiteinclusion3,
    DownPurityResult, DownColorResult, UpColorResult, UpPurityResult, showBackAlert, DownColor, DownPurity, UpColor, UpPurity } = useCalc();

  return (
    <div className='overflow-auto' >
      <Container >
        {/* <Header titleName="Rapa Calculator" /> */}
        <Row md={4}>
          <Col> <label>FLAG</label>
            <select className='form-control' placeholder='Flag' name="pFlag" value={flag.pFlag} onChange={handleChange}>
              <option value={'G'}>International</option>
              <option value={'A'}>National</option>
            </select></Col>

          <Col>
            <label>LAB</label>
            <select value={data?.PLABNM} className='form-control' name='PLABNM' onChange={handleChange}>
              <option selected={true} value={'GIA'}>GIA</option>
              <option value={'IGI'}>IGI</option>
              <option value={'HRD'}>HRD</option>
              <option value={'MSC'}>MSC</option>
            </select>
          </Col>
        </Row>

        <Row md={4}>
          <Col>
            <label>SHAPE</label>
            <select className='form-control' placeholder='Shape' name="PSHAPE" value={data.PSHAPE} onChange={handleChange}>
              <option value=''>SELECT</option>
              {shape && shape ? shape.map((item, key) => (
                <option key={key} value={item.SHAPE}>{item.SHAPE}</option>
              )) : ""}
            </select>
          </Col>
          <Col>
            <label>SHADE</label>
            <select className='form-control' placeholder='Color' name="PSHADE" value={data.PSHADE} onChange={handleChange}>
              <option value=''>SELECT</option>
              {shade && shade ? shade.map((item, key) => (
                <option key={key} value={item.SHADE}>{item.SHADE}</option>
              )) : ""}
            </select>
          </Col>
          <Col>
            <label>PURITY</label>
            <select className='form-control' placeholder='Purity' name="PPURITY" value={data.PPURITY} onChange={handleChange}>
              <option value=''>SELECT</option>
              {clarity && clarity ? clarity.map((item, key) => {
                return (
                  <option key={key} value={item.PURITY}>{item.PURITY}</option>
                )
              }) : ""}

            </select>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>CUT</label>
            <select placeholder='Cut' className='form-control' name="PCUT" value={data.PCUT} onChange={handleChange}>
              {cut && cut ? cut.map((item, key) => {
                return (
                  <option key={key} selected={item.CUT === "EX" ? true : false} value={item.CUT}>{item.CUT}</option>
                )
              }) : ""}
            </select>
          </Col>

          <Col>
            <label>POLISH</label>
            <select placeholder='Polish' className='form-control' name="PPOLISH" value={data.PPOLISH} onChange={handleChange}>
              {polish && polish ? polish.map((item, key) => (
                <option key={key} value={item.CUT}>{item.CUT}</option>
              )) : ""}
            </select>
          </Col>
          <Col>
            <label>SYM.</label>
            <select className='form-control' placeholder='SYM' name='PSEMMENTRY' value={data.PSEMMENTRY} onChange={handleChange}>
              {sym && sym ? sym.map((item, key) => (
                <option key={key} value={item.CUT}>{item.CUT}</option>
              )) : ""}
            </select>
          </Col>
          <Col>
            <label>FLOUROSENCE</label>
            <select className='form-control' placeholder='FLO' name="PFLOUROSENCE" value={data.PFLOUROSENCE} onChange={handleChange}>
              {fl && fl ? fl.map((item, key) => (
                <option key={key} value={item.FLOUROSENCE}>{item.FLOUROSENCE}</option>
              )) : ""}
            </select>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Card>

              <Row>
                <Col>
                  <label className='result-label'>WEIGHT</label>
                  <input className='input result-input form-control' type='number' name='PCTS' value={data.PCTS} placeholder="WEIGHT" onChange={handleChange} />
                </Col>
                <Col>
                  <label className='result-label'>AVG.DISC</label>
                  <input className='input result-input form-control' type='number' disabled value={result.RATE_N_AVGDISC?.DISC} />
                </Col>
                <Col>
                  <label className='result-label'>VALUE</label>
                  <input className='input result-input form-control' type='number' disabled value={result.RATE_N_AVGDISC?.NETAMT == 'null' ? 0 : result.RATE_N_AVGDISC?.NETAMT} />
                </Col>
              </Row>

              <Row>
                <Col >
                  <label className='result-label '>ROUGH WEI.</label>
                  <input className='form-control' type='number' disabled={savedResult.length > 0} value={data?.ROUGHCTS} name='ROUGHCTS' onChange={handleChange} />
                </Col>
                <Col >
                  <label className='result-label' >RATE </label>
                  <label className='result-label'>{result.RATE_N_AVGDISC?.RATE == 'null' ? 0 : result.RATE_N_AVGDISC?.RATE}</label>
                </Col>
                <Col size='4'>
                  <label className='result-label'>NET RATE</label>
                  <label className='result-label'>{result.RATE_N_AVGDISC?.NETRATE == 'null' ? 0 : result.RATE_N_AVGDISC?.NETRATE}</label>
                </Col>
              </Row>
             
              <Row>

                <Col className='btn'>
                  <IButton className="btn btn-primary"  btnName='Save Result'  click={() => Result()} />
                </Col>
                <Col className='btn'>
                  <IButton btnName='Adv.Para.' classes='' click={() => setAdvParameter(!advParameter)} />
                </Col>
              </Row>

            </Card>
          </Col>
          <Col sm>

            {/* Purity & Color UP/Down */}
            <Card>

              <Row>
                <Col >
                  <label className='result-label'>Purity</label>
                </Col>
                <Col >
                  <label className='result-label'>VALUE</label>
                </Col>
                <Col >
                  <label className='result-label' >DIFF.</label>
                </Col>
                <Col >
                  <label className='result-label'>AVG.DISC </label>
                </Col>
              </Row>
              <Row>
                <Col >{UpPurity} </Col>
                <Col >{UpPurityResult.NETAMT == 'null' ? 0 : UpPurityResult.NETAMT}</Col>
                <Col >{result.RATE_N_AVGDISC?.NETAMT !== 'null' ? UpPurityResult.NETAMT - result.RATE_N_AVGDISC?.NETAMT : 0}</Col>
                <Col >{UpPurityResult.DISC}</Col>
              </Row>
              <Row>
                <Col >{DownPurity} </Col>
                <Col >{DownPurityResult.NETAMT == 'null' ? 0 : DownPurityResult.NETAMT}</Col>
                <Col >{result.RATE_N_AVGDISC?.NETAMT !== 'null' ? DownPurityResult.NETAMT - result.RATE_N_AVGDISC?.NETAMT : 0}</Col>
                <Col >{DownPurityResult.DISC}</Col>
              </Row>
              <Row>
                <Col >
                  <label className='result-label'>COLOR</label>
                </Col>
                <Col >
                  <label className='result-label'>VALUE</label>
                </Col>
                <Col >
                  <label className='result-label' >DIFF. </label>
                </Col>
                <Col >
                  <label className='result-label'>AVG.DISC:</label>
                </Col>
              </Row>
              <Row>
                <Col >{UpColor} </Col>
                <Col >{UpColorResult.NETAMT == 'null' ? 0 : UpColorResult.NETAMT}</Col>
                <Col >{result.RATE_N_AVGDISC?.NETAMT !== 'null' ? UpColorResult.NETAMT - result.RATE_N_AVGDISC?.NETAMT : 0} </Col>
                <Col >{UpColorResult.DISC}</Col>
              </Row>
              <Row>
                <Col >{DownColor} </Col>
                <Col >{DownColorResult.NETAMT == 'null' ? 0 : DownColorResult.NETAMT}</Col>
                <Col >{result.RATE_N_AVGDISC?.NETAMT !== 'null' ? DownColorResult.NETAMT - result.RATE_N_AVGDISC?.NETAMT : 0}</Col>
                <Col >{DownColorResult.DISC}</Col>
              </Row>

            </Card>
          </Col>
        </Row>

       {savedResult.length > 0 ? (
          <>
            <Card style={{ paddingBottom: '15px' }} id='my-node' >
              <div  >
                <div  className='table-design' >
                  <h3>Rough Weight : {data?.ROUGHCTS}</h3>
                  <table>
                    <tr>
                      <th>Lab</th>
                      <th>Shape</th>
                      <th>Col</th>
                      <th>Pur</th>
                      <th>Cut</th>
                      <th>Pol</th>
                      <th>Sym</th>
                      <th>Flo</th>
                      <th>Lus</th>
                      <th>Sub <br />Col</th>
                      <th>Wei</th>
                      <th>Avg</th>
                      <th>Value</th>
                    </tr>
                    {Array.isArray(savedResult) && savedResult.length >= 0 ? savedResult.map((item, key) => {
                      return (
                        <>
                          <tr key={key}>
                            <td style={{ textTransform: 'capitalize' }}>{item?.PLABNM}</td>
                            <td style={{ textTransform: 'capitalize', textDecoration: 'underline' }} onClick={() => deleteResult(key)}>{item?.PSHAPE.substring(0, 4)}</td>
                            <td style={{ textTransform: 'capitalize' }}>{item?.PSHADE}</td>
                            <td>{item?.PPURITY}</td>
                            <td style={{ textTransform: 'capitalize' }}>{item?.PCUT}</td>
                            <td style={{ textTransform: 'capitalize' }}>{item?.PPOLISH}</td>
                            <td style={{ textTransform: 'capitalize' }}>{item?.PSEMMENTRY}</td>
                            <td>{item?.PFLOUROSENCE}</td>
                            <td>{item?.PLUSTER}</td>
                            <td>{item?.PSUBCOLOR}</td>
                            <td>{item?.PCTS}</td>
                            <td>{item?.RATE_N_AVGDISC?.DISC}</td>
                            <td>{item?.RATE_N_AVGDISC?.NETAMT}</td>                            
                          </tr>
                        </>
                      )
                    }) : ""}
                  </table>
                </div>
              </div>
            </Card>

            {savedResult.length > 1 ? (
             
                <Row>
                  <Col>
                    {/* <Button onClick={() => setSavedResult([])}>Clear Result</Button> */}
                  </Col>
                  <Col className='btn' style={{ textAlign: 'end' }}>
                  <label color='danger' style={{fontSize : '10px'}}>* Click on Shape to Remove Result </label>
                  <a href={`https://wa.me//send?text=hi`} ><label>whatsapp</label></a>
                  </Col>
                </Row>
             
            ) : ""}

          </>
        ) : ""}

        <Row >

          {advParameter ? (
            <>
              <Row>
                <Col className='pr-0'>
                  <label>SUBCOLOR</label>
                  <select className='form-control' placeholder='SUBCLR' name="PSUBCOLOR" value={data.PSUBCOLOR} onChange={handleChange}>
                    <option value=''>SELECT</option>
                    {color && color ? color.map((item, key) => (
                      <option key={key} value={item.SUBCOLOR}>{item.SUBCOLOR}</option>
                    )) : ""}
                  </select>
                </Col>

                <Col className='pr-0'>
                  <label>LUSTER</label>
                  <select className='form-control' placeholder='LUSTER' name="PLUSTER" value={data.PLUSTER} onChange={handleChange}>
                    <option value=''>SELECT</option>
                    {luster && luster ? luster.map((item, key) => (
                      <option key={key} value={item.CUT}>{item.CUT}</option>
                    )) : ""}
                  </select>
                </Col>
              </Row>
              <Row>
                <Col className='pr-0'>
                  <label>OPEN</label>
                  <select className='form-control' value={data.POPEN} name="POPEN" onChange={handleChange}>
                    <option value=''>SELECT</option>
                    {op1 && op1 ? op1.map((item, key) => (
                      <option key={key} value={item.SHORTNM}>{item.SHORTNM}</option>
                    )) : ""}

                  </select>
                </Col>
                <Col className='pr-0'>
                  <label>OPEN 1</label>
                  <select className='form-control' name="POPENTABLE" value={data.POPENTABLE} onChange={handleChange}>
                    <option value=''>SELECT</option>
                    {op2 && op2 ? op2.map((item, key) => (
                      <option key={key} value={item.SHORTNM}>{item.SHORTNM}</option>
                    )) : ""}
                  </select>
                </Col>
                <Col className='pr-0'>
                  <label>OPEN 2</label>
                  <select className='form-control' name="POPENCROWN" value={data.POPENCROWN} onChange={handleChange}>
                    <option value=''>SELECT</option>
                    {op3 && op3 ? op3.map((item, key) => (
                      <option key={key} value={item.SHORTNM}>{item.SHORTNM}</option>
                    )) : ""}
                  </select>
                </Col>
                <Col className='pr-0'>
                  <label>OPEN 3</label>
                  <select className='form-control' name='POPENPAV' value={data.POPENPAV} onChange={handleChange}>
                    <option value=''>SELECT</option>
                    {op4 && op4 ? op4.map((item, key) => (
                      <option key={key} value={item.SHORTNM}>{item.SHORTNM}</option>
                    )) : ""}
                  </select>
                </Col>
              </Row>
              <Row>
                <Col className='pr-0'>
                  <label>NATTS</label>
                  <select className='form-control' name='PNATTS' value={data.PNATTS} onChange={handleChange}>
                    <option value=''>SELECT</option>
                    {nat1 && nat1 ? nat1.map((item, key) => (
                      <option key={key} value={item.SHORTNM}>{item.SHORTNM}</option>
                    )) : ""}
                  </select>
                </Col>
                <Col className='pr-0'>
                  <label>NATTS 1</label>
                  <select className='form-control' name='PNATTSTABLE' value={data.PNATTSTABLE} onChange={handleChange}>
                    <option value=''>SELECT</option>
                    {nat2 && nat2 ? nat2.map((item, key) => (
                      <option key={key} value={item.SHORTNM}>{item.SHORTNM}</option>
                    )) : ""}
                  </select>
                </Col>
                <Col className='pr-0'>
                  <label>NATTS 2</label>
                  <select className='form-control' name='PNATTSCROWN' value={data.PNATTSCROWN} onChange={handleChange}>
                    <option value=''>SELECT</option>
                    {nat3 && nat3 ? nat3.map((item, key) => (
                      <option key={key} value={item.SHORTNM}>{item.SHORTNM}</option>
                    )) : ""}
                  </select>
                </Col>
                <Col className='pr-0'>
                  <label>NATTS 3</label>
                  <select  name='PNATTSPAV' value={data.PNATTSPAV} onChange={handleChange}>
                    <option value=''>SELECT</option>
                    {nat4 && nat4 ? nat4.map((item, key) => (
                      <option key={key} value={item.SHORTNM}>{item.SHORTNM}</option>
                    )) : ""}
                  </select>
                </Col>
              </Row>

              <Row>
                <Col className='pr-0'>
                  <label>TotDepath</label>
                  <input className='rate-input form-control' type='number' name='PTOTDEPTH' value={data.PTOTDEPTH} onChange={handleChange} />
                </Col>
                <Col className='pr-0'>
                  <label>Diameter</label>
                  <input className='rate-input form-control' type='number' name='PDIAMETER' value={data.PDIAMETER} onChange={handleChange} />
                </Col>
                <Col className='pr-0'>
                  <label>Ratio</label>
                  <input className='rate-input form-control' type='number' name="PRATIO" value={data.PRATIO} onChange={handleChange} />
                </Col>
                <Col className='pr-0'>
                  <label>Table</label>
                  <input className='rate-input form-control' type='number' name='PPTABLE' value={data.PPTABLE} onChange={handleChange} />
                </Col>
              </Row>
              <label >White Inclusions</label>
              <Row>
                <Col className='pr-0'>
                  {/* <label className='result-label'>1</label> */}
                  <select className='input form-control' value={data?.PWHITE_INCL} name='PWHITE_INCL' onChange={handleChange}>
                    <option value=''>SELECT</option>
                    {whiteinclusion && whiteinclusion ? whiteinclusion.map((item, key) => (
                      <option key={key} value={item.NATTS}>{item.NATTS}</option>
                    )) : ""}
                  </select>
                </Col>
                <Col className='pr-0'>
                  {/* <label className='result-label' >2</label> */}
                  <select className='input form-control' value={data?.PWHITE_INCL1} name='PWHITE_INCL1' onChange={handleChange}>
                    <option value=''>SELECT</option>
                    {whiteinclusion1 && whiteinclusion1 ? whiteinclusion1.map((item, key) => (
                      <option key={key} value={item.NATTS}>{item.NATTS}</option>
                    )) : ""}
                  </select>
                </Col>
                <Col className='pr-0'>
                  {/* <label className='result-label' >3</label> */}
                  <select className='input form-control' value={data?.PWHITE_INCL2} name='PWHITE_INCL2' onChange={handleChange}>
                    <option value=''>SELECT</option>
                    {whiteinclusion2 && whiteinclusion2 ? whiteinclusion2.map((item, key) => (
                      <option key={key} value={item.NATTS}>{item.NATTS}</option>
                    )) : ""}
                  </select>
                </Col>
                <Col className='pr-0'>
                  {/* <label className='result-label' >4</label> */}
                  <select className='input form-control' value={data?.PWHITE_INCL3} name='PWHITE_INCL3' onChange={handleChange}>
                    <option value=''>SELECT</option>
                    {whiteinclusion3 && whiteinclusion3 ? whiteinclusion3.map((item, key) => (
                      <option key={key} value={item.NATTS}>{item.NATTS}</option>
                    )) : ""}
                  </select>
                </Col>
              </Row>

              <label>Extra Factes</label>

              <Row>
                <Col className='pr-0'>
                  {/* <label className='result-label' >1</label> */}
                  <select className='input form-control'  value={data?.PEXTRA_FACET1} name='PEXTRA_FACET1' onChange={handleChange}>
                    <option value=''>SELECT</option>
                    {extra && extra ? extra.map((item, key) => (
                      <option key={key} value={item.NATTS}>{item.NATTS}</option>
                    )) : ""}
                  </select>
                </Col>
                <Col className='pr-0'>
                  {/* <label className='result-label' >2</label> */}
                  <select className='input form-control' value={data?.PEXTRA_FACET2} name='PEXTRA_FACET2' onChange={handleChange}>
                    <option value=''>SELECT</option>
                    {extra2 && extra2 ? extra2.map((item, key) => (
                      <option key={key} value={item.NATTS}>{item.NATTS}</option>
                    )) : ""}
                  </select>
                </Col>
                <Col className='pr-0'>
                  {/* <label className='result-label'>3</label> */}
                  <select className='input form-control' value={data?.PEXTRA_FACET3} name='PEXTRA_FACET3' onChange={handleChange}>
                    <option value=''>SELECT</option>
                    {extra3 && extra3 ? extra3.map((item, key) => (
                      <option key={key} value={item.NATTS}>{item.NATTS}</option>
                    )) : ""}
                  </select>
                </Col>
              </Row>

            </>) : ""}
        </Row>
      </Container>
    </div>
  );
};

export default Calc;
