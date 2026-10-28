export function calcularMensalidade(
    valor: number,
    desconto: number
):number{
    return valor - (valor * desconto) / 100;
}