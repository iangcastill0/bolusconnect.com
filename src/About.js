export default function About() {
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 mb-3">About Bolus-Connect</h1>
              <p className="text-muted mb-4">
                Bolus-Connect helps calculate suggested bolus doses, track logs,
                and quickly reference nutritional information. It aims to make
                diabetes management simpler and more connected.
              </p>
              <h2 className="h5">What’s inside</h2>
              <ul className="text-start">
                <li>Logs for recent boluses and glucose levels</li>
                <li>Bolus calculator with I:C ratio and ISF</li>
                <li>Parameters for CGM manufacturer and targets</li>
                <li>AI-powered nutrition lookup</li>
              </ul>
              <p className="mb-0 text-muted">
                This site previews the mobile app’s core screens and features.
              </p>

              <hr className="my-4" />
              <div className="mt-2">
                <h2 className="h6 text-uppercase text-muted mb-2">Meet the founder</h2>
                <a
                  href="https://igcastillo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary"
                >
                  igcastillo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
