const PageNotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <button onClick={() => history.back()}>Go back</button>
    </div>
  );
};

export default PageNotFound;
