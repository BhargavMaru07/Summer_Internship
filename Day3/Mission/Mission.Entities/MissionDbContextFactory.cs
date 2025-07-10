using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Mission.Entities
{
    public class MissionDbContextFactory : IDesignTimeDbContextFactory<MissionDbContext>
    {
        public MissionDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<MissionDbContext>();
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=MissionApiDb;Username=postgres;Password=bhargav;");

            return new MissionDbContext(optionsBuilder.Options);
        }
    }
}
