using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    public class SponsorshipContext : DbContext
    {
        public SponsorshipContext(DbContextOptions<SponsorshipContext> options)
            : base(options)
        {
        }

        public DbSet<Sponsorship> SponsorshipItems { get; set; }

    }
}