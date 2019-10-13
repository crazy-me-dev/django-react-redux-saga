import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeSelectJobItems } from "./selectors";
import saga from "./saga";
import Header from "../../components/layout/header";
import { fetchJobItems, deleteJobItem, createJobItem } from "./actions";
import { useInjectSaga } from "../../utils/injectSaga";
const key = "dashboard";

function Dashboard({ JobItems, fetchJobItems, deleteJobItem, createJobItem }) {
  useInjectSaga({ key, saga });

  const [fileName, setFileName] = useState(null);

  useEffect(() => {
    fetchJobItems();
  }, []);

  const onChangeHandler = event => {
    setFileName(event.target.files[0]);
  };

  const onUploadFile = () => {
    if (fileName) {
      loadFileAsText(fileName);
    }
  };

  function loadFileAsText(fileToLoad) {
    const reader = new FileReader();
    reader.onload = async e => {
      const data = e.target.result;

      try {
        await createJobItem(data.split(","));
      } catch (error) {
        console.log(error);
      }
    };
    reader.readAsBinaryString(fileToLoad);
  }

  return (
    <>
      <Header />

      {/* <div className="upload-file p-4">
        <div className="file btn btn-lg btn-primary">
          Select File
          <input
            type="file"
            name="file"
            onChange={onChangeHandler}
          />
        </div>
      </div> */}

      <div className="row">
        <div className="input-group p-4 col-md-4">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile04"
              onChange={onChangeHandler}
            />
            <label className="custom-file-label" htmlFor="inputGroupFile04">
              {fileName ? fileName.name : "Choose file"}
            </label>
          </div>
        </div>

        <div className="py-4 col-md-4" style={{ marginLeft: -24 }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onUploadFile}
            disabled={!fileName}
          >
            Upload
          </button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Job ID</th>
            <th scope="col">Name</th>
            <th scope="col">Left</th>
            <th scope="col">Right</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {(JobItems || []).map(item => (
            <tr key={item.jobItemId}>
              <th scope="row">{item.jobItemId}</th>
              <td>{item.side}</td>
              <td>Y</td>
              <td>Y</td>
              <td>{item.status}</td>
              <td>
                <button
                  onClick={() => deleteJobItem(item.jobItemId)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  JobItems: makeSelectJobItems()
});

const mapDispatchToProps = dispatch => {
  return {
    fetchJobItems: () => dispatch(fetchJobItems()),
    deleteJobItem: id => dispatch(deleteJobItem(id)),
    createJobItem: data => dispatch(createJobItem(data))
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withConnect(Dashboard);
