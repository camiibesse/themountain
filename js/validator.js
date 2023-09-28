const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    categoria: /^[a-zA-ZÀ-ÿ\s]{7,40}$/,
    marca: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
	corta: /^[a-zA-ZÀ-ÿ\s]{6,}$/,
    larga: /^[a-zA-ZÀ-ÿ\s]{15,}$/,
    stock: /\d+$/,
    desde: /(1[89]|[2-9]\d|\d{3,})/,
    hasta: /(1[9]|[2-9]\d|\d{3,})/,
    envio: /^(si|no)$/i,
    formato: /^.+\.jpg$/i,
	
}

const campos = {
	nombre: false,
    categoria:false,
    marca : false,
    corta: false,
    larga: false,
    stock: false,
    desde: false,
    hasta: false,
    envio: false,
    formato: false,
	
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "categoria":
            validarCampo(expresiones.categoria, e.target, 'categoria');			
		break;
        case "marca":
            validarCampo(expresiones.marca, e.target, 'marca');			
		break;
		
		case "corta":
			validarCampo(expresiones.corta, e.target, 'corta');
		break;
        case "larga":
			validarCampo(expresiones.larga, e.target, 'larga');
		break;
        case "stock":
			validarCampo(expresiones.stock, e.target, 'stock');
		break;
        case "desde":
			validarCampo(expresiones.desde, e.target, 'desde');
		break;
        case "hasta":
			validarCampo(expresiones.hasta, e.target, 'hasta');
		break;
        case "envio":
			validarCampo(expresiones.envio, e.target, 'envio');
		break;
        case "formato":
			validarCampo(expresiones.formato, e.target, 'formato');
		break;

		
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.categoria && campos.marca && campos.corta && campos.larga && campos.stock && campos.desde && campos.hasta && campos.stock && campos.envio && campos.formato && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 3000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});
