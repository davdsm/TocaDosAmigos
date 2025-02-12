// place files you want to import through the `$lib` alias in this folder.
export const sendMail = async (name: string, contact: string, date: string, message: string, events: string[]) => {
	let status: boolean = false;
	await fetch('https://api.davdsm.pt/sendMail', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			davdsmKey: 'd41d8cd98f00b204e9800998ecf8427e'
		},
		body: JSON.stringify({
			sender: '🌼 Toca dos Amigos',
			receiver: {
				email: 'danielafmoliveira@hotmail.com',
				name: 'Administração'
			},
			subject: `⭐ uhuh voilà. Nova Reserva!`,
			message: `
<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css2?family=Cabin:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css"><!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		sup,
		sub {
			line-height: 0;
			font-size: 75%;
		}

		@media (max-width:595px) {
			.desktop_hide table.icons-inner {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}
	</style><!--[if mso ]><style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style> <![endif]-->
</head>

<body class="body" style="background-color: #6d7369; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #6d7369;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;margin-top: 50px;margin-bottom:50px;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #8b9385; border-radius: 30px; color: #000000; width: 575px; margin: 0 auto;" width="575">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center" style="line-height:10px">
																	<div style="max-width: 144px;"><img src="https://6a1d946592.imgdist.com/pub/bfra/0s6e6jpj/0rd/doq/b1q/friends.png" style="display: block; height: auto; border: 0; width: 100%;" width="144" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="heading_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: 'Cabin', Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 25px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 30px;"><span class="tinyMce-placeholder" style="word-break: break-word;">Nova Reserva <br></span></h1>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:60px;padding-right:60px;padding-top:10px;">
																<div style="color:#ffffff;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
																	<p style="margin: 0; margin-bottom: 16px;">Trago uma ótima notícia! 🚀 Acabaram de receber uma nova reserva para a <strong>Toca dos Amigos.</strong> Estou muito entusiasmado em compartilhar este sucesso convosco.</p>
																	<p style="margin: 0; margin-bottom: 16px;">Podem conferir todas as informações deixadas pelo vosso <u><strong>novo</strong></u> cliente mais em baixo.</p>
																	<p style="margin: 0; margin-bottom: 16px;">&nbsp;</p>
																	<p style="margin: 0; margin-bottom: 16px;"><strong><u>Nome:</u> </strong>${name},<strong><br><u>Contact:</u></strong> ${contact},<strong><br><u>Data:</u></strong> ${date},<br><u><strong>Mensagem</strong>:</u><br>${message}</p>
																	<p style="margin: 0; margin-bottom: 16px;"><u><strong>Tipo de Evento</strong></u><strong>:</strong> ${events.map((event: string) => `${event} `)}</p>
																	<p style="margin: 0; margin-bottom: 16px;">&nbsp;</p>
																	<p style="margin: 0; margin-bottom: 16px;">Obrigado por confiarem na plataforma para divulgar o espaço fantástico que a Toca dos Amigos é. Estou animado para continuar a ajudar a tornar este espaço num dos melhores da região!</p>
																	<p style="margin: 0;margin-bottom: 56px;">Abraço,<br><strong>DAVDSM</strong><br>Equipe de Suporte ao Cliente</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>
			`
		})
	})
		.then((response) => {
			console.log('✈️ Email 1 Enviado? - ', response.body);
			console.log('---------------------------------------------------');
			console.log('');
			status = true;
		})
		.catch((response) => {
			console.log('✈️ Email 1 Não Enviado? - ', response.body);
			console.log('---------------------------------------------------');
			console.log('');
			status = false;
		});
	return status;
};
