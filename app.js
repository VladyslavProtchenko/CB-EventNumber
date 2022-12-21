const eventHandler = (cd) => {
    i=2;
    cd(i-1);
    
    setInterval(()=>cd(i++),3000)
}

eventHandler(event => {
    console.log('event => ', event);
  });