using System;
using swensen_api.Context;

namespace swensen_api.Repositories
{
    public interface IUnitOfWork
    {
        void BeginTran();
        void RollBackTran();
        void CommitTran();

        void Complete();
        Task CompleteAsync();
    }

    public class UnitOfWork : IUnitOfWork
	{
        private readonly EFContext _context;

        public UnitOfWork(EFContext context)
        {
            _context = context;
        }

        public void BeginTran()
        {
            _context.Database.BeginTransaction();
        }

        public void CommitTran()
        {
            _context.Database.CommitTransaction();
        }

        public void RollBackTran()
        {
            _context.Database.RollbackTransaction();
        }

        public void Complete()
        {
            _context.SaveChanges();
        }

        public async Task CompleteAsync()
        {
            await _context.SaveChangesAsync();
        }

    }
}

