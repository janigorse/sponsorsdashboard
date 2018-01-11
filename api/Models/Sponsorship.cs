using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Models
{
    public class Sponsorship
    {
        public int Id {get; set;}
        public string Sponsoree {get; set;}
        public string Event {get; set;}
        public string EventStartDate {get; set;}
        public string EventEndDate {get; set;}
        public string ContractPrice {get; set;}
    }
}