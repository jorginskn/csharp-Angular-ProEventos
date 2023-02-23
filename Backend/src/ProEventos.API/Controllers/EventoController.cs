using Microsoft.AspNetCore.Mvc;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventoController : ControllerBase
{

    public IEnumerable<Evento> _evento = new Evento[]{
           new Evento()  {
            EventoId = 1,
            Tema = "Angular e .NET CORE",
            Local = "Belo horizonte",
            Lote = "Primeiro lote",
            QtdPessoas = 250,
            DataEvento = DateTime.Now.AddDays(2).ToString(),
            ImageURL = "foto.jpg"
        },
           new Evento()  {
            EventoId = 2,
            Tema = "Angular e NODE.JS",
            Local = "Brasília/DF",
            Lote = "Primeiro lote",
            QtdPessoas = 1000,
            DataEvento = DateTime.Now.AddDays(5).ToString(),
            ImageURL = "foto1.jpg"
        }
    };


    public EventoController()
    {

    }

    [HttpGet]
    public IEnumerable<Evento> Get()
    {
        return _evento;

    }

    [HttpGet("{id}")]
    public IEnumerable<Evento> GetEventById(int id)
    {
        System.Console.WriteLine(_evento);
        return _evento.Where(evento => evento.EventoId == id);
    }

    [HttpPost]

    public string Post()
    {
        return " POST PAI";
    }

    [HttpPut("{id}")]

    public string Put(int id)
    {
        return $"Exemplo de put {id}";
    }

    [HttpDelete("{id}")]

    public string Delete(int id)
    {
        return $"Exemplo de delete {id}";
    }

}
