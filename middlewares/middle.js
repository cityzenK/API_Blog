const auth = true;

export const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('This is a user request')
  next();
}

export const headerMiddleware = (req, res, next) => {
  if (req.headers.host != "") {
    console.log(req.headers.host);
    next();
  } else {
    res.status(404).send('Not found');
  }
}

export const isAuth = (req, res, next) => {
  if (auth) {
    console.log("Is Authenticate");
    next();
  } else {
    res.status(401).send('Not auth');
  }
}
