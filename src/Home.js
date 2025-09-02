export default function Home({ sections }) {
  return (
    <div className="container py-4">
      <div className="row g-4">
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex"
          >
            <div className="card bg-light border-0 shadow-sm rounded-3 w-100 h-100">
              <img
                src={section.image}
                alt={`${section.title} screenshot`}
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                <h2 className="h5 card-title">{section.title}</h2>
                <p className="card-text text-muted">{section.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

