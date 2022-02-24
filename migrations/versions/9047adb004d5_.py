"""empty message

Revision ID: 9047adb004d5
Revises: 2807edd385a2
Create Date: 2022-02-23 16:38:02.144059

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9047adb004d5'
down_revision = '2807edd385a2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('community',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('address', sa.String(length=250), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('address')
    )
    op.create_table('expense',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('community_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['community_id'], ['community.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('incident',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('community_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['community_id'], ['community.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('rel_user_community',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('community_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['community_id'], ['community.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('rel_user_community')
    op.drop_table('incident')
    op.drop_table('expense')
    op.drop_table('community')
    # ### end Alembic commands ###