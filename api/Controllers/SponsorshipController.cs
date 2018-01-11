using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using System.Linq;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    public class SponsorshipController : Controller
    {
        private readonly SponsorshipContext _context;

        public SponsorshipController(SponsorshipContext context)
        {
            _context = context;

            if (_context.SponsorshipItems.Count() == 0)
            {
                _context.SponsorshipItems.Add(new Sponsorship { 
                    Sponsoree = "Felix Baumgartner",
                    Event = "Stratosphere jump",
                    EventStartDate = "2012-10-14",
                    EventEndDate = "2012-10-14",
                    ContractPrice = "300.000,00 €"
                });
                _context.SponsorshipItems.Add(new Sponsorship { 
                    Sponsoree = "Cristiano Ronaldo",
                    Event = "World Cup 2018",
                    EventStartDate = "2018-06-14",
                    EventEndDate = "2018-07-15",
                    ContractPrice = "1.500.000,00 €"
                });
                _context.SponsorshipItems.Add(new Sponsorship { 
                    Sponsoree = "Usain Bolt",
                    Event = "2009 Berlin World Championships",
                    EventStartDate = "2009-08-15",
                    EventEndDate = "2009-08-23",
                    ContractPrice = "500.000,00 €"
                });
                _context.SponsorshipItems.Add(new Sponsorship { 
                    Sponsoree = "Goran Dragić",
                    Event = "EuroBasket 2017",
                    EventStartDate = "2017-08-31",
                    EventEndDate = "2017-09-17",
                    ContractPrice = "100.000,00 €"
                });
                _context.SaveChanges();
            }
        }  


        [HttpGet]
        public IEnumerable<Sponsorship> GetAll()
        {
            return _context.SponsorshipItems.ToList();
        }


        [HttpGet("{id}", Name="GetSponsorship")]
        public IActionResult GetById(int id)     
        {
            var item = _context.SponsorshipItems.FirstOrDefault(s => s.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Sponsorship item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            _context.SponsorshipItems.Add(item);
            _context.SaveChanges();

            return CreatedAtRoute("GetSponsorship", new {id = item.Id}, item);
        }
    }
}