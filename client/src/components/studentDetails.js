import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentDetails = () => {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);

  const getCount = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/get-count");
      setTotal(res.data.total);
    } catch (error) {
      console.log(error);
    }
  };

  const totalNoPage = Math.ceil(total / limit);

  const handleClick = (index) => {
    setPage(index + 1);
  };

  useEffect(() => {
    const getStudents = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/get-students?page=${page}&limit=${limit}`
        );
        setStudents(res.data.students);
      } catch (error) {
        console.log(error);
      }
    };
    getStudents();
    getCount();
  }, [page, limit]);

  return (
    <div className="home">
      <div className="content">
        <div className="header text-center mb-3">
          <h2>Student Details</h2>
        </div>
        <div className="main">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Total Mark</th>
              </tr>
            </thead>
            {students.map((student) => (
              <tbody>
                <tr className={student.id%2===0?"tab-active":""}>
                  <th scope="row">{student.id}</th>
                  <td>{student.name}</td>
                  <td>{student.total}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="footer text-center d-flex justify-content-evenly my-3">
          <div>
            {totalNoPage > 0 &&
              [...Array(totalNoPage)].map((val, index) => (
                <button
                  className={
                    page === index + 1 ? "num-btn btn-active" : "num-btn"
                  }
                  key={index}
                  onClick={() => handleClick(index)}
                >
                  {index + 1}
                </button>
              ))}
          </div>
          <div className="d-flex  align-items-center">
            <label>Pagesize</label>
            <select
              className="form-select select ms-3"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
