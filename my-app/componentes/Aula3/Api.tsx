type userProps = {
  id: number,
  name: string,
  username: string,
  email: string
}

export default async function Api() {

  const resposta = await fetch("https://jsonplaceholder.typicode.com/users")
  const dados: userProps[] = await resposta.json()

  console.log (dados)

  return(
    <>
      {dados.map((item) => (
        <div key={item.id}>
          <ul className="m-3">
            <li><b>ID:</b> {item.id}</li>
            <li><b>NAME:</b> {item.name}</li>
            <li><b>USERNAME:</b> {item.username}</li>
            <li><b>EMAIL:</b> {item.email}</li>
          </ul>
          <br/>
        </div>
      ))}
    </>
  );
  
}