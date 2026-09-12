import React, { useState } from "react";

function UploadSection() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [reportText, setReportText] = useState("");
  const [findings, setFindings] = useState([]);
  const [labResults, setLabResults] = useState([]);
  const [explanations, setExplanations] = useState([]);

  const [suggestions, setSuggestions] = useState([]);
  const [abnormalValues, setAbnormalValues] = useState([]);
  const [overallSummary, setOverallSummary] = useState("");
  const [generalAdvice, setGeneralAdvice] = useState([]);
  const [doctorAdvice, setDoctorAdvice] = useState([]);

  const [loading, setLoading] = useState(false);
  const [analysisStep, setAnalysisStep] = useState("");

  // ================================
  // FILE SELECTION
  // ================================
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setMessage("");
      setReportText("");
      setFindings([]);
      setLabResults([]);
      setExplanations([]);
      setSuggestions([]);
      setAbnormalValues([]);
      setOverallSummary("");
      setGeneralAdvice([]);
      setDoctorAdvice([]);
    }
  };

  // ================================
  // CONVERT VALUE TO ARRAY SAFELY
  // ================================
  const makeArray = (value) => {
    if (Array.isArray(value)) {
      return value;
    }

    if (value === null || value === undefined || value === "") {
      return [];
    }

    return [value];
  };

  // ================================
  // ANALYZE REPORT
  // ================================
  const analyzeReport = async () => {
    if (!file) {
      setMessage("Please select a medical report first.");
      return;
    }

    setLoading(true);
    setMessage("");
    setAnalysisStep("Uploading medical report...");

    const formData = new FormData();
    formData.append("file", file);

    try {
      setTimeout(() => {
        setAnalysisStep("Extracting medical information...");
      }, 900);

      setTimeout(() => {
        setAnalysisStep("Checking findings and laboratory values...");
      }, 1800);

      setTimeout(() => {
        setAnalysisStep("Preparing simple explanation...");
      }, 2700);

      const response = await fetch(
        "http://127.0.0.1:5000/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to analyze report."
        );
      }

      // Existing backend data
      setReportText(data.text || "");
      setFindings(makeArray(data.findings));
      setLabResults(makeArray(data.lab_results));
      setExplanations(makeArray(data.explanations));

      // New backend data
      setSuggestions(makeArray(data.suggestions));
      setAbnormalValues(makeArray(data.abnormal_values));
      setOverallSummary(data.overall_summary || "");
      setGeneralAdvice(makeArray(data.general_advice));
      setDoctorAdvice(makeArray(data.doctor_advice));

      setAnalysisStep("");
      setMessage(
        "Medical report analyzed successfully."
      );
    } catch (error) {
      console.error(error);

      setMessage(
        "Error analyzing report. Please make sure the Flask backend is running."
      );

      setAnalysisStep("");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  // ================================
  // DOWNLOAD ANALYSIS
  // ================================
  const downloadAnalysis = () => {
    let content = "AI HEALTH RECORD TRANSLATOR\n";
    content += "====================================\n\n";

    content += "EXTRACTED MEDICAL REPORT\n";
    content += "------------------------------------\n";
    content += reportText || "No report text available.";

    content += "\n\nOVERALL SUMMARY\n";
    content += "------------------------------------\n";
    content += overallSummary || "No summary available.";

    content += "\n\nDETECTED FINDINGS\n";
    content += "------------------------------------\n";

    if (findings.length > 0) {
      findings.forEach((finding, index) => {
        content += `${index + 1}. ${finding}\n`;
      });
    } else {
      content += "No major findings detected.\n";
    }

    content += "\nABNORMAL VALUES\n";
    content += "------------------------------------\n";

    if (abnormalValues.length > 0) {
      abnormalValues.forEach((item, index) => {
        if (typeof item === "object") {
          content += `${index + 1}. ${
            item.name ||
            item.test ||
            "Laboratory value"
          }: ${item.value || ""} ${
            item.unit || ""
          }\n`;

          if (item.status) {
            content += `Status: ${item.status}\n`;
          }

          if (item.explanation) {
            content += `Explanation: ${item.explanation}\n`;
          }

          content += "\n";
        } else {
          content += `${index + 1}. ${item}\n`;
        }
      });
    } else {
      content += "No abnormal values detected.\n";
    }

    content += "\nLABORATORY RESULTS\n";
    content += "------------------------------------\n";

    if (labResults.length > 0) {
      labResults.forEach((lab) => {
        content += `${lab.name || lab.test}: ${
          lab.value || ""
        } ${lab.unit || ""}\n`;

        content += `Reference Range: ${
          lab.reference || "Not available"
        }\n`;

        if (lab.status) {
          content += `Status: ${lab.status}\n`;
        }

        if (lab.explanation) {
          content += `Explanation: ${lab.explanation}\n`;
        }

        if (lab.suggestion) {
          content += `Suggestion: ${lab.suggestion}\n`;
        }

        content += "\n";
      });
    } else {
      content += "No laboratory results detected.\n";
    }

    content += "\nSIMPLE EXPLANATION\n";
    content += "------------------------------------\n";

    if (explanations.length > 0) {
      explanations.forEach((item, index) => {
        content += `${index + 1}. ${item}\n`;
      });
    } else {
      content += "No explanation available.\n";
    }

    content += "\nSUGGESTIONS\n";
    content += "------------------------------------\n";

    if (suggestions.length > 0) {
      suggestions.forEach((item, index) => {
        content += `${index + 1}. ${item}\n`;
      });
    } else {
      content += "No specific suggestions available.\n";
    }

    content += "\nGENERAL ADVICE\n";
    content += "------------------------------------\n";

    if (generalAdvice.length > 0) {
      generalAdvice.forEach((item, index) => {
        content += `${index + 1}. ${item}\n`;
      });
    } else {
      content += "No general advice available.\n";
    }

    content += "\nDOCTOR ADVICE\n";
    content += "------------------------------------\n";

    if (doctorAdvice.length > 0) {
      doctorAdvice.forEach((item, index) => {
        content += `${index + 1}. ${item}\n`;
      });
    } else {
      content +=
        "Consult a qualified healthcare professional for interpretation.\n";
    }

    content +=
      "\n\nDISCLAIMER: This tool is for educational/demo purposes only and does not replace professional medical advice.";

    const blob = new Blob([content], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "AI_Health_Report_Analysis.txt";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  // ================================
  // CREATE LAB CHART DATA
  // ================================
  const createChartData = (lab) => {
    const numericValue = parseFloat(
      String(lab.value || "").replace(/[^\d.-]/g, "")
    );

    if (isNaN(numericValue)) {
      return null;
    }

    const referenceText = lab.reference || "";

    const rangeMatch = referenceText.match(
      /(\d+(?:\.\d+)?)\s*[-–]\s*(\d+(?:\.\d+)?)/
    );

    if (!rangeMatch) {
      return null;
    }

    const normalMin = parseFloat(rangeMatch[1]);
    const normalMax = parseFloat(rangeMatch[2]);

    const range = normalMax - normalMin;

    if (range <= 0) {
      return null;
    }

    let chartMin = Math.min(
      normalMin - range * 0.5,
      numericValue - range * 0.2
    );

    let chartMax = Math.max(
      normalMax + range * 0.5,
      numericValue + range * 0.2
    );

    if (chartMin < 0 && normalMin >= 0) {
      chartMin = 0;
    }

    const totalRange = chartMax - chartMin;

    const normalLeft =
      ((normalMin - chartMin) / totalRange) * 100;

    const normalWidth =
      ((normalMax - normalMin) / totalRange) * 100;

    let markerPosition =
      ((numericValue - chartMin) / totalRange) * 100;

    markerPosition = Math.max(
      0,
      Math.min(100, markerPosition)
    );

    const isNormal =
      numericValue >= normalMin &&
      numericValue <= normalMax;

    return {
      numericValue,
      normalMin,
      normalMax,
      chartMin,
      chartMax,
      normalLeft,
      normalWidth,
      markerPosition,
      isNormal,
    };
  };

  // ================================
  // GET LAB STATUS
  // ================================
  const getLabStatus = (lab) => {
    if (lab.status) {
      return lab.status;
    }

    const chart = createChartData(lab);

    if (!chart) {
      return "Unknown";
    }

    if (chart.numericValue < chart.normalMin) {
      return "Low";
    }

    if (chart.numericValue > chart.normalMax) {
      return "High";
    }

    return "Normal";
  };

  // ================================
  // STATUS BADGE
  // ================================
  const getStatusClass = (status) => {
    const value = String(status).toLowerCase();

    if (value.includes("normal")) {
      return "bg-success";
    }

    if (
      value.includes("high") ||
      value.includes("low") ||
      value.includes("abnormal")
    ) {
      return "bg-danger";
    }

    return "bg-secondary";
  };

  return (
    <section
      id="upload"
      className="container py-5"
    >

      {/* UPLOAD SECTION */}

      <div className="text-center mb-4">
        <h2 className="fw-bold">
          Upload Your Medical Report
        </h2>

        <p className="text-muted">
          Upload a PDF medical report and let the AI
          explain it in simple language.
        </p>
      </div>

      <div className="card shadow-lg border-0 p-4">

        <div className="mb-3">

          <label className="form-label fw-bold">
            Select Medical Report
          </label>

          <input
            type="file"
            className="form-control"
            accept=".pdf"
            onChange={handleFileChange}
          />

        </div>

        {file && (
          <div className="alert alert-info">
            Selected file:{" "}
            <strong>{file.name}</strong>
          </div>
        )}

        <button
          className="btn btn-success w-100"
          onClick={analyzeReport}
          disabled={loading}
        >

          {loading ? (
            <>
              <span className="loading-spinner"></span>
              Analyzing...
            </>
          ) : (
            "Analyze Report"
          )}

        </button>

        {loading && (
          <div className="text-center mt-4">

            <div className="spinner-border text-success mb-3"></div>

            <p className="fw-semibold">
              {analysisStep}
            </p>

          </div>
        )}

        {message && !loading && (
          <div className="alert alert-success mt-4">
            {message}
          </div>
        )}

      </div>

      {/* AI SUMMARY */}

      {overallSummary && (
        <div className="card shadow-sm border-0 mt-4 p-4">

          <h4 className="fw-bold mb-3">
            🧠 AI Health Summary
          </h4>

          <div className="alert alert-info mb-0">
            {overallSummary}
          </div>

        </div>
      )}

      {/* EXTRACTED REPORT */}

      {reportText && (
        <div className="card shadow-sm border-0 mt-4 p-4">

          <h4 className="fw-bold mb-3">
            📄 Extracted Medical Report
          </h4>

          <div
            className="bg-light p-3 rounded"
            style={{
              whiteSpace: "pre-wrap",
              maxHeight: "400px",
              overflowY: "auto",
            }}
          >
            {reportText}
          </div>

        </div>
      )}

      {/* FINDINGS */}

      {reportText && (
        <div className="card shadow-sm border-0 mt-4 p-4">

          <h4 className="fw-bold mb-3">
            🔍 Detected Findings
          </h4>

          {findings.length > 0 ? (
            <ul className="list-group">

              {findings.map((finding, index) => (
                <li
                  key={index}
                  className="list-group-item"
                >
                  ⚠️ {finding}
                </li>
              ))}

            </ul>
          ) : (
            <p className="text-muted">
              No major findings detected.
            </p>
          )}

        </div>
      )}

      {/* ABNORMAL VALUES */}

      {abnormalValues.length > 0 && (
        <div className="card shadow-sm border-0 mt-4 p-4">

          <h4 className="fw-bold mb-3">
            ⚠️ Abnormal Values
          </h4>

          <div className="row">

            {abnormalValues.map((item, index) => {

              if (typeof item === "object") {

                return (
                  <div
                    className="col-md-6 mb-3"
                    key={index}
                  >

                    <div className="alert alert-warning h-100">

                      <h6 className="fw-bold">
                        {item.name ||
                          item.test ||
                          "Laboratory Value"}
                      </h6>

                      <p className="mb-1">
                        Value:{" "}
                        <strong>
                          {item.value || ""}
                          {" "}
                          {item.unit || ""}
                        </strong>
                      </p>

                      {item.status && (
                        <p className="mb-1">
                          Status:{" "}
                          <strong>
                            {item.status}
                          </strong>
                        </p>
                      )}

                      {item.explanation && (
                        <p className="mb-0">
                          {item.explanation}
                        </p>
                      )}

                    </div>

                  </div>
                );
              }

              return (
                <div
                  className="col-md-6 mb-3"
                  key={index}
                >

                  <div className="alert alert-warning">
                    ⚠️ {item}
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      )}

      {/* LABORATORY RESULTS */}

      {labResults.length > 0 && (
        <div className="card shadow-sm border-0 mt-4 p-4">

          <h4 className="fw-bold mb-4">
            🧪 Laboratory Results
          </h4>

          <div className="table-responsive">

            <table className="table table-bordered table-hover">

              <thead className="table-success">

                <tr>
                  <th>Test</th>
                  <th>Patient Value</th>
                  <th>Reference Range</th>
                  <th>Status</th>
                </tr>

              </thead>

              <tbody>

                {labResults.map((lab, index) => {

                  const status = getLabStatus(lab);

                  return (
                    <tr key={index}>

                      <td>
                        {lab.name || lab.test}
                      </td>

                      <td>
                        <strong>
                          {lab.value}{" "}
                          {lab.unit || ""}
                        </strong>
                      </td>

                      <td>
                        {lab.reference ||
                          "Not available"}
                      </td>

                      <td>

                        <span
                          className={`badge ${getStatusClass(
                            status
                          )}`}
                        >
                          {status}
                        </span>

                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>

          </div>

        </div>
      )}

      {/* LAB EXPLANATIONS */}

      {labResults.length > 0 && (
        <div className="card shadow-sm border-0 mt-4 p-4">

          <h4 className="fw-bold mb-4">
            💬 Laboratory Value Explanation
          </h4>

          <div className="row">

            {labResults.map((lab, index) => (

              <div
                className="col-md-6 mb-3"
                key={index}
              >

                <div className="border rounded p-3 h-100">

                  <h6 className="fw-bold">
                    {lab.name || lab.test}
                  </h6>

                  {lab.explanation ? (
                    <p className="text-muted mb-2">
                      {lab.explanation}
                    </p>
                  ) : (
                    <p className="text-muted">
                      No explanation available.
                    </p>
                  )}

                  {lab.suggestion && (
                    <div className="alert alert-light mb-0">
                      💡{" "}
                      <strong>
                        Suggestion:
                      </strong>{" "}
                      {lab.suggestion}
                    </div>
                  )}

                </div>

              </div>

            ))}

          </div>

        </div>
      )}

      {/* LAB CHARTS */}

      {labResults.length > 0 && (
        <div className="card shadow-sm border-0 mt-4 p-4">

          <h4 className="fw-bold mb-4">
            📊 Laboratory Result Charts
          </h4>

          {labResults.map((lab, index) => {

            const chart = createChartData(lab);

            if (!chart) {
              return null;
            }

            const status = getLabStatus(lab);

            return (
              <div
                key={index}
                className="mb-5"
              >

                <div className="d-flex justify-content-between mb-2">

                  <strong>
                    {lab.name || lab.test}
                  </strong>

                  <span>
                    Patient Value:{" "}
                    <strong>
                      {lab.value}{" "}
                      {lab.unit || ""}
                    </strong>
                  </span>

                </div>

                <div
                  style={{
                    position: "relative",
                    height: "70px",
                    paddingTop: "15px",
                  }}
                >

                  {/* Main Track */}

                  <div
                    style={{
                      position: "absolute",
                      left: "0",
                      right: "0",
                      top: "25px",
                      height: "18px",
                      background: "#e9ecef",
                      borderRadius: "10px",
                    }}
                  ></div>

                  {/* Normal Range */}

                  <div
                    style={{
                      position: "absolute",
                      left: `${chart.normalLeft}%`,
                      width: `${chart.normalWidth}%`,
                      top: "25px",
                      height: "18px",
                      background: "#198754",
                      borderRadius: "10px",
                    }}
                  ></div>

                  {/* Patient Marker */}

                  <div
                    style={{
                      position: "absolute",
                      left: `${chart.markerPosition}%`,
                      top: "10px",
                      width: "4px",
                      height: "48px",
                      background:
                        chart.isNormal
                          ? "#198754"
                          : "#dc3545",
                      transform:
                        "translateX(-2px)",
                    }}
                  ></div>

                  {/* Patient Value Label */}

                  <div
                    style={{
                      position: "absolute",
                      left: `${chart.markerPosition}%`,
                      top: "-12px",
                      transform:
                        "translateX(-50%)",
                      fontWeight: "bold",
                      fontSize: "13px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {lab.value}
                  </div>

                </div>

                <div className="d-flex justify-content-between small text-muted">

                  <span>
                    {chart.chartMin.toFixed(1)}
                  </span>

                  <span>
                    Normal: {chart.normalMin} -{" "}
                    {chart.normalMax}
                  </span>

                  <span>
                    {chart.chartMax.toFixed(1)}
                  </span>

                </div>

                <div className="mt-2">

                  <span className="badge bg-success me-2">
                    Normal Range
                  </span>

                  <span
                    className={`badge ${
                      chart.isNormal
                        ? "bg-success"
                        : "bg-danger"
                    }`}
                  >
                    Patient Value: {status}
                  </span>

                </div>

              </div>
            );
          })}

        </div>
      )}

      {/* SIMPLE EXPLANATION */}

      {explanations.length > 0 && (
        <div className="card shadow-sm border-0 mt-4 p-4">

          <h4 className="fw-bold mb-3">
            💡 Simple Explanation
          </h4>

          <ul className="list-group">

            {explanations.map((item, index) => (
              <li
                key={index}
                className="list-group-item"
              >
                {item}
              </li>
            ))}

          </ul>

        </div>
      )}

      {/* AI SUGGESTIONS */}

      {suggestions.length > 0 && (
        <div className="card shadow-sm border-0 mt-4 p-4">

          <h4 className="fw-bold mb-3">
            💡 AI Suggestions
          </h4>

          <ul className="list-group">

            {suggestions.map((item, index) => (
              <li
                key={index}
                className="list-group-item"
              >
                ✅ {item}
              </li>
            ))}

          </ul>

        </div>
      )}

      {/* GENERAL ADVICE */}

      {generalAdvice.length > 0 && (
        <div className="card shadow-sm border-0 mt-4 p-4">

          <h4 className="fw-bold mb-3">
            🌿 General Health Advice
          </h4>

          <ul>

            {generalAdvice.map((item, index) => (
              <li
                key={index}
                className="mb-2"
              >
                {item}
              </li>
            ))}

          </ul>

        </div>
      )}

      {/* DOCTOR ADVICE */}

      {doctorAdvice.length > 0 && (
        <div className="card shadow-sm border-0 mt-4 p-4">

          <h4 className="fw-bold mb-3">
            👨‍⚕️ When to Consult a Doctor
          </h4>

          <ul>

            {doctorAdvice.map((item, index) => (
              <li
                key={index}
                className="mb-2"
              >
                {item}
              </li>
            ))}

          </ul>

        </div>
      )}

      {/* QUESTIONS FOR DOCTOR */}

      {reportText && (
        <div className="card shadow-sm border-0 mt-4 p-4">

          <h4 className="fw-bold mb-3">
            🩺 Questions to Ask Your Doctor
          </h4>

          <ul>

            <li>
              What do these abnormal values mean?
            </li>

            <li>
              Do I need any additional tests?
            </li>

            <li>
              Should I discuss any diet or
              lifestyle changes with you?
            </li>

            <li>
              Do I need any treatment or medication?
            </li>

          </ul>

        </div>
      )}

      {/* DOWNLOAD */}

      {reportText && (
        <div className="text-center mt-4 mb-5">

          <button
            className="btn btn-primary px-4"
            onClick={downloadAnalysis}
          >
            📥 Download Analysis
          </button>

        </div>
      )}

      {/* DISCLAIMER */}

      <div className="text-center text-muted small mt-4">
        ⚕️ This tool is for educational/demo purposes only.
        It does not replace professional medical advice.
      </div>

    </section>
  );
}

export default UploadSection;