const monedas=[5,2,1,0.5,0.2];
export function calculadorMonedasMinimas(cambio)
{
    if(cambio==0) return "[]";
    let monedasMinimas=[];
    let indiceMoneda = 0;
    while (cambio > 0) {
        if (cambio >= monedas[indiceMoneda]) {
          const numMaxMonedas = Math.floor(cambio / monedas[indiceMoneda]);   
          for (let i = 0; i < numMaxMonedas; i++) {
            monedasMinimas.push(monedas[indiceMoneda]);
          }
          cambio -= numMaxMonedas * monedas[indiceMoneda];
        }
        indiceMoneda++;
      }

    let cadenaMonedas="[";
    for(let i=0;i<monedasMinimas.length;i++)
    {
        cadenaMonedas=cadenaMonedas+monedasMinimas[i];
        if(i<monedasMinimas.length-1) cadenaMonedas=cadenaMonedas+",";
    }
    cadenaMonedas=cadenaMonedas+"]";

    return cadenaMonedas;
}