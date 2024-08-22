function insert(num)
        {
         var numero = document.getElementById('resultado').innerHTML ;
         document.getElementById('resultado').innerHTML = numero + num;
        }
        function clean()
        {
         document.getElementById('resultado').innerHTML = "";
        }
        function back()
        {
         var resultado = document.getElementById('resultado').innerHTML;
         document.getElementById('resultado').innerText =  resultado0.substring(0, resulatado.length -1);
        }
        function calcular()
        {
         var resultado = document.getElementById('resultado').innerHTML
         if(resultado)
         {
            document.getElementById('resultado').innerHTML = eval(resultado);
         }
         else
         {
            document.getElementById('resultado').innerHTML = "nada..."
         }
        }
