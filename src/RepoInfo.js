const RepoInfo = ({repo}) => {
  let license;

  switch (repo.licenseInfo?.spdxId) {
    case undefined:
      license = (
        <span className="px-1 py-0 ms-1 d-inline-block btn btn-sm btn-danger">
          NO LICENSE
        </span>
      );
      break;
    default:
      license = (<span className="px-1 py-0 ms-1 d-inline-block btn btn-sm btn-success">
          {repo.licenseInfo.spdxId}
        </span>
      )
  }

  return (
    <li className="list-group-item" key={repo.id.toString()}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column">
          <a className="h5 mb-0 text-decoration-none" href={repo.url} target="_blank" rel="noreferrer">
            {repo.name}
          </a>
          <p className="small">{repo.description || repo.id}</p>
        </div>
        <div className="text-nowrap ms-3">
          {license}
          <span className={
            "px-1 py-0 ms-1 d-inline-block btn btn-sm " + (repo.viewerSubscription === "SUBSCRIBED" ? "btn-success" : "btn-outline-secondary")
            }>
            {repo.viewerSubscription}
          </span>
        </div>
      </div>
    </li>
  );
};

export default RepoInfo;
