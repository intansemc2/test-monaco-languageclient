Here are the steps i tried to run the project:

1. Run the python language server

- Navigate to `back-end` folder

- Create a virtual env for `python-lsp-server`

```
python -m venv ./.venv
```

- Install libraries

```
pip install -r requirements.txt
```

- Run the server

```
./run_start.sh
```

or 

```
pylsp --ws --port 3000
```

2. Run the front-end

- Navigate to the `frond-end` folder

- Install required modules 

```
pnpm i 
```

- Run the front-end

```
pnpm dev 
```

- Open the website at `http://localhost:5173/bare`
