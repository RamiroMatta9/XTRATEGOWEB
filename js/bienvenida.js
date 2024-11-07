document.addEventListener("DOMContentLoaded", function () {
    Swal.fire({
        html: `
            <div style="background-image: url('/img/bienvenida.webp'); background-size: cover; background-position: center; padding: 20px; border-radius: 12px; color: #ffffff; display: flex; flex-direction: column; align-items: center; text-align: left;">
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <div style="background: rgba(0, 0, 0, 0.7); padding: 15px 20px; border-radius: 8px; width: 80%; margin-bottom: 20px; text-align: center;">
                    <h2 style="font-family: Poppins, sans-serif; font-weight: 700; font-size: 28px; margin: 0;">Bienvenido a XTRATEGO</h2>
                </div>
                
                <div style="background: rgba(0, 0, 0, 0.6); padding: 15px 20px; border-radius: 8px; width: 80%; font-size: 18px; line-height: 1.6;">
                    <p style="margin: 0;">
                        ¿Te imaginas llevar tu negocio al siguiente nivel en un mundo cada vez más digital?
                    </p>
                    <p style="margin-top: 10px;">
                        En XTRATEGO, creemos que no solo es posible, sino que está a tu alcance. Somos el aliado estratégico que entiende tus desafíos y comparte tus aspiraciones de crecimiento sostenible.
                    </p>
                </div>
            </div>
        `,
        width: 900,
        showCloseButton: true,
        showConfirmButton: false,
        background: 'transparent', // Fondo transparente para que se vea la imagen de fondo
        padding: '0',
        customClass: {
            popup: 'swal2-popup', // Clase personalizada de SweetAlert2
        },
        backdrop: `
            rgba(0, 0, 0, 0.5)
            center
            no-repeat
        `
    });
});
