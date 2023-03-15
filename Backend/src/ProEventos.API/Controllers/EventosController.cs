using Microsoft.AspNetCore.Mvc;
using ProEventos.API.Data;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class eventosController : ControllerBase
{

    private readonly DataContext _context;

    public eventosController(DataContext context)
    {
        _context = context;

    }

    [HttpGet]
    public IEnumerable<Evento> Get()
    {
        return _context.Eventos;

    }

    [HttpGet("{id}")]
    public Evento GetEventById(int id)
    {
        return _context.Eventos.FirstOrDefault(evento => evento.EventoId == id);
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
