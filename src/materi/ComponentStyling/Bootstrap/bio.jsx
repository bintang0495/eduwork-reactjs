import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack } from "react-bootstrap";

export default class Bio extends React.Component {
  //   listProject(props) {
  //     props.forEach((el) => {
  //       <div className="col-lg-4 col-md-4 col-sm-12">
  //         <h4 className="fs-4">{el.company}</h4>
  //         <p className="fw-light">
  //           {el.start} - {el.end}
  //         </p>
  //       </div>;
  //     });
  //   }

  render() {
    // let data = [
    //   {
    //     company: "PT Donggi Senoro,LNG",
    //     start: "Oktober 2018",
    //     end: "November 2019",
    //   },
    //   {
    //     company: "Tirtakencana Tatawarna",
    //     start: "Juli 2019",
    //     end: "Desember 2019",
    //   },
    //   {
    //     company: "PT SURYA CITRA MEDIA, TBK (EMTEK GROUP)",
    //     start: "Januari 2020",
    //     end: "Juni 2021",
    //   },
    //   {
    //     company: "PT Mandala Multifinance Tbk",
    //     start: "Mei 2020",
    //     end: "Juni 2020",
    //   },
    // ];
    return (
      <div className="container text-center" id="bio">
        <h3 className="fs-bold fs-2">My Bio</h3>
        <p className="fs-6 fst-italic fw-light">
          Perkenalkan nama saya Bintang Muhamad Akbar, pernah bekerja di PT
          Mitra Integrasi Informatika selama 3 tahun sebagai Technical
          Consultant, jobdesk yang saya lakukan saat itu adalah melakukan
          maintenance aplikasi OrangE HR, bahasa pemrograman yang saya kuasai
          adalah Java.
        </p>
        <Stack gap={5}>
          <div>
            <h1 className="fs-bold">Project Assignment</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h4 className="fs-4">PT Donggi Senoro,LNG</h4>
              <p className="fw-light">Oktober 2018 - November 2019</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h4 className="fs-4">Tirtakencana Tatawarna</h4>
              <p className="fw-light">Juli 2019 – Desember 2019</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h4 className="fs-4">PT SURYA CITRA MEDIA, TBK (EMTEK GROUP)</h4>
              <p className="fw-light">Januari 2020 – Juni 2021</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h4 className="fs-4">PT Mandala Multifinance Tbk</h4>
              <p className="fw-light">Mei 2020 – Juni 2020</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h4 className="fs-4">PT. Jaya Ekspress Transindo</h4>
              <p className="fw-light">Mei 2020 – Juni 2021</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h4 className="fs-4">PT. Bank BNI Syariah</h4>
              <p className="fw-light">September 2020 – November 2020</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h4 className="fs-4">PT. Fajar Surya Wisesa Tbk</h4>
              <p className="fw-light">November 2020 – Juni 2021</p>
            </div>
          </div>
        </Stack>
      </div>
    );
  }
}
